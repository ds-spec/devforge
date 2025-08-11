"use client";

import FloatingSnippets from "@/components/FloatingSnippets";
import Navbar from "@/components/Navbar";
import SearchBar from "@/components/search-bar";

export default function Home() {
  return (
    <div className="relative w-full h-screen shadow-inner backdrop-blur-3xl">
      <SearchBar />
    </div>
  );
}
