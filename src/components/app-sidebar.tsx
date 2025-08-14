"use client";

import { Bookmark, FolderKanban, NotebookPen, SquarePen } from "lucide-react";
import SideHeader from "./side-header";
import {
  Sidebar,
  SidebarContent,
  SidebarFooter,
  SidebarHeader,
  useSidebar,
} from "./ui/sidebar";
import ProjectNavItems from "./projects-navitems";
import MainChats from "./main-chats";
import UserDetails from "./user-details";

export default function AppSidebar() {
  const data = {
    user: {
      name: "Synth",
      email: "synth@gmail.com",
      avatar:
        "https://plus.unsplash.com/premium_photo-1671656349218-5218444643d8?q=80&w=987&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    },
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
    <Sidebar className="bg-neutral-950" collapsible="icon">
      <SidebarHeader>
        <SideHeader />
      </SidebarHeader>
      <SidebarContent>
        <ProjectNavItems items={data.sideMain} />
        <MainChats chats={data.chats} />
      </SidebarContent>
      <SidebarFooter>
        <UserDetails user={data.user} />
      </SidebarFooter>
    </Sidebar>
  );
}
