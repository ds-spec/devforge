"use client";

import Navbar from "@/components/Navbar";
import SearchBar from "@/components/search-bar";

export default function Home() {
  return (
    <div className="relative w-full h-screen shadow-inner backdrop-blur-3xl">
      <div className="w-full h-full top-0 absolute overflow-hidden">
        <div className="w-full h-8 pointer-events-none bg-gradient-to-l from-red-100 via-green-200 to-blue-300 blur-[80px]" />
      </div>
      <Navbar />
      <SearchBar />
    </div>
  );
}
