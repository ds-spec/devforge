import { Sidebar, SidebarTrigger } from "./ui/sidebar";

export default function AppSidebar() {
  return (
    <Sidebar collapsible="icon">
      <SidebarTrigger className="text-white hover:bg-gray-500 hover:text-white cursor-pointer !size-8" />
    </Sidebar>
  );
}
