"use client";
import { HomeLayout } from "@/module/home/ui/layout/home-layout";
import { api } from "@/utils/trpc";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { httpBatchLink } from "@trpc/client";
import React, { ReactNode, useState } from "react";

interface HomeLayoutProps {
  children: ReactNode;
}

const Layout: React.FC<HomeLayoutProps> = ({ children }) => {
  const [queryClient] = useState(() => new QueryClient());
  const [trpcClient] = useState(() =>
    api.createClient({
      links: [
        httpBatchLink({
          url: "/api/trpc",
        }),
      ],
    }),
  );
  return (
    <>
      <api.Provider client={trpcClient} queryClient={queryClient}>
        <QueryClientProvider client={queryClient}>
          <HomeLayout>{children}</HomeLayout>
        </QueryClientProvider>
      </api.Provider>
    </>
  );
};

export default Layout;
