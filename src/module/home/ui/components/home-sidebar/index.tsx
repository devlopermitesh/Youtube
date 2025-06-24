"use client"
import { Sidebar, SidebarContent, SidebarHeader } from "@/components/ui/sidebar";
import { MainSection } from "./MainSection";
import { Separator } from "@/components/ui/separator";
import { PersonalSection } from "./PersonalSection";

const HomeSidebar=()=>{
return(
    <Sidebar className="z-16 border-none bg-sidebar pt-16" collapsible="icon">
        <SidebarHeader>
        </SidebarHeader>
        <SidebarContent>
    <MainSection/>
    <Separator/>
    <PersonalSection/>
        </SidebarContent>
    </Sidebar>
)
}
export default HomeSidebar;