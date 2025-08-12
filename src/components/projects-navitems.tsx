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
                className="mt-1 cursor-pointer hover:bg-neutral-800 hover:text-white"
                tooltip={item.title}
              >
                {item.icon && <item.icon />}
                <span className="font-montserrat text-md font-semibold tracking-wide">
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
