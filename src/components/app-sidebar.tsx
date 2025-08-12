"use client";

import { Bookmark, FolderKanban, NotebookPen, SquarePen } from "lucide-react";
import SideHeader from "./side-header";
import {
  Sidebar,
  SidebarContent,
  SidebarHeader,
  useSidebar,
} from "./ui/sidebar";
import ProjectNavItems from "./projects-navitems";

export default function AppSidebar() {
  const data = {
    sideMain: [
      {
        title: "New Chat",
        url: "#",
        icon: SquarePen,
      },
      {
        title: "Projects",
        url: "#",
        icon: FolderKanban,
      },
      {
        title: "Notes",
        url: "#",
        icon: NotebookPen,
      },
      {
        title: "Bookmarks",
        url: "#",
        icon: Bookmark,
      },
    ],
  };
  const { state } = useSidebar();
  console.log(state);
  return (
    <Sidebar collapsible="icon">
      <SidebarHeader>
        <SideHeader />
      </SidebarHeader>
      <SidebarContent>
        <ProjectNavItems items={data.sideMain} />
      </SidebarContent>
    </Sidebar>
  );
}
