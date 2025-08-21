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
import { motion } from "motion/react";
import MainChats from "./main-chats";
import UserDetails from "./user-details";
import { getServerSession } from "next-auth";
import { authOptions } from "@/app/api/auth/[...nextauth]/options";
import { useSession } from "next-auth/react";

export default function AppSidebar() {
  const { data: session } = useSession();
  const { state } = useSidebar();

  if (!session?.user) return null;
  const data = {
    user: {
      name: "Synth",
      email: "synth@gmail.com",
      avatar:
        // "https://plus.unsplash.com/premium_photo-1671656349218-5218444643d8?q=80&w=987&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        "https://images.unsplash.com/photo-1494790108377-be9c29b29330?q=80&w=774&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    },
    sideMain: [
      {
        title: "New Chat",
        url: "#",
        icon: <SquarePen size={"1.9em"} />,
      },
      {
        title: "Projects",
        url: "#",
        icon: <FolderKanban size={"1.3em"} />,
      },
      {
        title: "Notes",
        url: "#",
        icon: <NotebookPen size={"1.3em"} />,
      },
      {
        title: "Bookmarks",
        url: "#",
        icon: <Bookmark size={"1.3em"} />,
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
  return (
    <Sidebar
      collapsible="icon"
      className={`border-r border-neutral-800 ${
        state === "collapsed" ? "bg-transparent" : "bg-[#1c1c1c]"
      } overflow-hidden`}
    >
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
