import {
  SidebarGroup,
  SidebarGroupContent,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
} from "@/components/ui/sidebar";
import Link from "next/link";
import { getIconComponent } from "@/lib/iconMapper";
import usePersonalRoutes from "./PersonalRoute";

export const PersonalSection = () => {
  const routes = usePersonalRoutes();

  return (
    <SidebarGroup>
      <SidebarGroupContent>
        <SidebarMenu>
          {routes.map((route) => {
            const Icon = getIconComponent(route.icon);

            return (
              <SidebarMenuItem key={route.title}>
                <SidebarMenuButton
                  tooltip={route.title}
                  asChild
                  isActive={route.is_Active}
                  className={`w-full px-3 py-2 rounded-lg flex items-center gap-4 text-sm font-medium transition-all 
                  ${
                    route.is_Active
                      ? "bg-muted text-primary"
                      : "hover:bg-muted text-muted-foreground"
                  }`}
                >
                  <Link href={route.url} className="flex items-center gap-4 w-full">
                            <Icon className="!w-6 !h-6" />
                    <span>{route.title}</span>
                  </Link>
                </SidebarMenuButton>
              </SidebarMenuItem>
            );
          })}
        </SidebarMenu>
      </SidebarGroupContent>
    </SidebarGroup>
  );
};
