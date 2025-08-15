"use client";
import { Search } from "lucide-react";
import { SidebarTrigger, useSidebar } from "./ui/sidebar";

export default function SideHeader() {
  const { state } = useSidebar();
  return (
    <div className="flex items-center justify-between">
      <div className="flex items-center">
        <SidebarTrigger className="text-white hover:bg-neutral-800 ml-0.5 hover:text-white cursor-pointer" />
        <h4
          className={`text-white font-roboto font-semibold text-md ${
            state === "collapsed" ? "opacity-0 w-0 pointer-events-none" : ""
          }`}
        >
          Synth.AI
        </h4>
      </div>
      <Search
        className={`text-white size-8 hover:bg-neutral-800 ${
          state === "collapsed" ? "opacity-0 size-0 pointer-events-none" : ""
        } p-2 rounded-md cursor-pointer`}
      />
    </div>
  );
}
