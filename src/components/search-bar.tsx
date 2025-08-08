"use client";

import { ArrowUp } from "lucide-react";
import { Textarea } from "./ui/textarea";
import { useRef, useState } from "react";

export default function SearchBar() {
  const [inputValue, setInputValue] = useState("");
  const textareaRef = useRef(null);

  console.log(inputValue);

  return (
    <div className="w-full h-full flex flex-col gap-20 justify-center items-center">
      <h3 className="text-gradient font-roboto text-4xl">Hello, Deepak</h3>
      <div className="w-[45vw] h-fit transition-transform duration-300 font-roboto rounded-3xl backdrop-blur-xl px-2 py-2 text-3xl mx-auto border border-neutral-600">
        <Textarea
          ref={textareaRef}
          onChange={(e) => setInputValue(e.target.value)}
          placeholder="Ask GPT"
          className="bg-transparent w-full focus:outline-none rounded-3xl border-none shadow-none  focus:!ring-transparent text-white !placeholder-neutral-300/30 !text-lg break-words resize-none"
        />
        <div className="flex justify-between items-center">
          <div className="flex items-center gap-4"></div>
          <div className="rounded-full bg-neutral-700 hover:bg-neutral-800 transition-colors duration-100 cursor-pointer p-2">
            <ArrowUp color="#fff" size={".7em"} />
          </div>
        </div>
      </div>
    </div>
  );
}
