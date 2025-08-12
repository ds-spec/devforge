"use client";

import SideHeader from "./side-header";
import {
  Sidebar,
  SidebarHeader,
  SidebarTrigger,
  useSidebar,
} from "./ui/sidebar";

export default function AppSidebar() {
  const { state } = useSidebar();
  console.log(state);
  return (
    <Sidebar collapsible="icon" className="px-2 py-3">
      <SidebarHeader>
        <SideHeader />
      </SidebarHeader>
    </Sidebar>
  );
}
