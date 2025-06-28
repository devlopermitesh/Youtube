import { HomeLayout } from "@/module/home/ui/layout/home-layout";
import React, { ReactNode } from "react";

interface HomeLayoutProps {
  children: ReactNode;
}

const Layout: React.FC<HomeLayoutProps> = ({ children }) => {
  return (
    <>
      <HomeLayout>{children}</HomeLayout>
    </>
  );
};

export default Layout;
