import { LucideIcon } from "lucide-react";
import {
  SidebarGroup,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
} from "./ui/sidebar";

interface ProjectNavItem {
  title: string;
  url: string;
  icon: LucideIcon;
}

export default function ProjectNavItems({
  items,
}: {
  items: ProjectNavItem[];
}) {
  return (
    <>
      <SidebarGroup>
        <SidebarMenu>
          {items?.map((item) => (
            <SidebarMenuItem key={item.title} className="text-white">
              <SidebarMenuButton
                className="cursor-pointer flex items-center gap-2 hover:bg-neutral-800 hover:text-white active:bg-neutral-700 active:text-white"
                tooltip={item.title}
              >
                {item.icon && <item.icon className="shrink-0 w-5 h-5" />}
                <span className="font-montserrat text-sm tracking-wide leading-none">
                  {item.title}
                </span>
              </SidebarMenuButton>
            </SidebarMenuItem>
          ))}
        </SidebarMenu>
      </SidebarGroup>
    </>
  );
}
