"use client";

import SearchBar from "@/components/search-bar";

// animate-[animatedgradient_2s_ease_infinite]

export default function Home() {
  return (
    <div className="relative w-full h-screen shadow-inner backdrop-blur-3xl">
      <div className="w-full h-full animate-[animatedgradient_1s_ease_infinite] top-0 absolute overflow-hidden">
        <div className="w-full h-8  bg-gradient-to-l from-red-100 via-green-200 to-blue-300 blur-[80px]" />
      </div>
      <SearchBar />
    </div>
  );
}
