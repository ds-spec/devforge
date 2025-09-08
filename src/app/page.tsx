"use client";

import Navbar from "@/components/Navbar";
import SearchBar from "@/components/search-bar";
import { useState } from "react";

export default function Home() {
  const [isEntered, setIsEntered] = useState(false);
  return (
    <div className="relative w-full h-screen shadow-inner backdrop-blur-3xl">
      {!isEntered && (
        <div className="w-full h-full top-0 absolute overflow-hidden">
          <div className="w-full h-8 pointer-events-none bg-gradient-to-l from-red-100 via-green-200 to-blue-300 blur-[80px]" />
        </div>
      )}
      <Navbar />
      <SearchBar isEntered={isEntered} setIsEntered={setIsEntered} />
    </div>
  );
}
