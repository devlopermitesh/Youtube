"use client";
import { HomeLayout } from "@/module/home/ui/layout/home-layout";
import { TRPCProvider } from "@/trpc/client";
import { trpc } from "@/trpc/server";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import React, { ReactNode, useState } from "react";

interface HomeLayoutProps {
  children: ReactNode;
}

const Layout: React.FC<HomeLayoutProps> = ({ children }) => {
  const [queryClient] = useState(() => new QueryClient());

  return (
    <>
      <QueryClientProvider client={queryClient}>
        <HomeLayout>
          <TRPCProvider>
{children}
          </TRPCProvider>
          </HomeLayout>
      </QueryClientProvider>
    </>
  );
};

export default Layout;
