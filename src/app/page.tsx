"use client";

import FloatingSnippets from "@/components/FloatingSnippets";
import Navbar from "@/components/Navbar";
import SearchBar from "@/components/search-bar";

export default function Home() {
  return (
    <div
      // style={{ backgroundSize: '100% 120%' }}
      className="relative w-full h-screen bg-[#111112] shadow-inner backdrop-blur-3xl"
    >
      <SearchBar />
    </div>
  );
}
