import { SidebarProvider } from "@/components/ui/sidebar";
import React from "react";
import HomeNavbar from "@/module/home/ui/components/home-navbar";
import HomeSidebar from "../components/home-sidebar";

export  function HomeLayout({ children }: { children: React.ReactNode }) {
    return (
     <SidebarProvider>
               <div className="w-full">
           <HomeNavbar/>
           <div className="flex min-h-screen pt-[4rem]">
            <HomeSidebar/>
                <main className="flex-1 overflow-y-auto">{children}</main>
           </div>
               </div>

     </SidebarProvider>              
    );
}