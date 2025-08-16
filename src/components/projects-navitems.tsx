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
  icon: React.ReactNode;
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
                className="cursor-pointer hover:bg-neutral-800 hover:text-white active:bg-neutral-700 active:text-white"
                tooltip={item.title}
              >
                {item.icon}
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
