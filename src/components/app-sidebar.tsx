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
import MainChats from "./main-chats";

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
    chats: [
      {
        name: "How to build a mind map",
        url: "#",
      },
      {
        name: "Build research docs from scratch",
        url: "#",
      },
      {
        name: "How synth is different from all the research apps?",
        url: "#",
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
        <MainChats chats={data.chats} />
      </SidebarContent>
    </Sidebar>
  );
}
