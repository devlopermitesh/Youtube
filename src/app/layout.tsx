import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { ClerkProvider } from "@clerk/nextjs";
import { trpc } from "@/trpc/server";
export const metadata: Metadata = {
  title: "Youtube",
  description: "Youtube for uploading video",
};

const inter = Inter({ subsets: ["latin"] });
export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
    return (
    <ClerkProvider afterSignOutUrl={"/"}>
      <html lang="en">
        <body className={inter.className}>
          {children}
          </body>
      </html>
    </ClerkProvider>
  );
}
