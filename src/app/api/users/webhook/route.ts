import { db } from '@/db';
import { usersTable } from '@/db/schema';
import { verifyWebhook } from '@clerk/nextjs/webhooks';
import { WebhookEvent } from '@clerk/backend';
import { eq } from 'drizzle-orm';
import { NextRequest } from 'next/server';

export async function POST(req: NextRequest) {
  const secret = process.env.CLERK_WEBHOOK_SIGNING_SECRET;

  if (!secret) {
    throw new Error('❌ Missing CLERK_WEBHOOK_SIGNING_SECRET in .env');
  }

  try {
    const evt: WebhookEvent = await verifyWebhook(req, {
      signingSecret: secret,
    });

    switch (evt.type) {
      case 'user.created': {
        const user = evt.data;
        await db.insert(usersTable).values({
          clerkId: user.id,
          name: `${user.first_name ?? ''} ${user.last_name ?? ''}`.trim(),
          imageUrl: user.image_url,
        });
        console.log('✅ User created:', user.id);
        break;
      }

      case 'user.updated': {
        const user = evt.data;
        if (!user.id) {
  console.error('User ID is missing in webhook payload!');
  return new Response('Missing user ID', { status: 400 });
}

        await db
          .update(usersTable)
          .set({
            name: `${user.first_name ?? ''} ${user.last_name ?? ''}`.trim(),
            imageUrl: user.image_url,
            updatedAt: new Date(),
          })
          .where(eq(usersTable.clerkId, user.id));
        console.log('🔄 User updated:', user.id);
        break;
      }

      case 'user.deleted': {
        const user = evt.data;
        if (!user.id) {
  console.error('User ID is missing in webhook payload!');
  return new Response('Missing user ID', { status: 400 });
}

        await db
          .delete(usersTable)
          .where(eq(usersTable.clerkId, user.id));
        console.log('❌ User deleted:', user.id);
        break;
      }

      default:
        console.log('ℹ️ Unhandled Clerk webhook type:', evt.type);
        break;
    }

    return new Response('✅ OK', { status: 200 });
  } catch (err) {
    console.error('❌ Webhook verification failed:', err);
    return new Response('Invalid webhook', { status: 400 });
  }
}
