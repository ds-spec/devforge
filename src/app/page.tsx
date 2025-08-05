"use client";

import FloatingSnippets from "@/components/FloatingSnippets";
import Navbar from "@/components/Navbar";

export default function Home() {
  return (
    <div className="relative w-full h-screen bg-[#131416]">
      <div className="absolute inset-0 z-">
        <FloatingSnippets />
      </div>
      <div className="relative z-10">
        <Navbar />
      </div>
    </div>
  );
}
