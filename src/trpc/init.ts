import { ratelimit } from '@/lib/ratellimit';
import { auth } from '@clerk/nextjs/server';
import { initTRPC, TRPCError } from '@trpc/server';
import {cache} from "react"
export const createTRPContext=cache(async()=>{
    const {userId}=await auth();
    return {clerkuserId:userId}
})
 
export type Context=Awaited<ReturnType<typeof createTRPContext>>

/**
 * Initialization of tRPC backend
 * Should be done only once per backend!
 */
const t = initTRPC.context<Context>().create();
 
/**
 * Export reusable router and procedure helpers
 * that can be used throughout the router
 */
export const createTRPCRouter= t.router;
export const publicProcedure = t.procedure;
export const privateProcedure = t.procedure.use(async function isAuth(opts){
    const {ctx}=opts;
if(!ctx.clerkuserId){
    throw  new TRPCError({code:"UNAUTHORIZED"})
}
console.log("Clerk",ctx.clerkuserId)
const {success}=await ratelimit.limit(ctx.clerkuserId);
if(!success){
    throw new TRPCError({code:"TOO_MANY_REQUESTS"});
}
return opts.next({
ctx:{
    ...ctx,
}
})
});
export const createCallerFactory=t.createCallerFactory;