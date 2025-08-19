"use client";

import { ArrowUp } from "lucide-react";
import { Textarea } from "./ui/textarea";
import { useEffect, useRef, useState } from "react";
import usePrompt from "@/hooks/usePrompt";
import { Button } from "./ui/button";

interface InputProps {
  textareaRef: React.RefObject<HTMLTextAreaElement | null>;
  inputValue: string;
  handleChange: (e: React.ChangeEvent<HTMLTextAreaElement>) => void;
}

interface SubmitButtonProps {
  handleSubmit: () => void;
}

const SubmitButton = ({ handleSubmit }: SubmitButtonProps) => {
  return (
    <button
      className="rounded-full bg-neutral-700 hover:bg-neutral-800 transition-colors duration-100 cursor-pointer p-2"
      onClick={handleSubmit}
      aria-label="Send message"
    >
      <ArrowUp color="#fff" size={".7em"} />
    </button>
  );
};

const Input = ({ textareaRef, inputValue, handleChange }: InputProps) => {
  return (
    <Textarea
      ref={textareaRef}
      value={inputValue}
      aria-label="Enter your input here"
      onChange={handleChange}
      placeholder="Ask Synth"
      className="bg-transparent w-full focus:outline-none rounded-3xl border-none shadow-none  focus:!ring-transparent text-white !placeholder-neutral-300/30 !text-lg break-words resize-none"
    />
  );
};

export default function SearchBar() {
  const [inputValue, setInputValue] = useState("");
  const textareaRef = useRef<HTMLTextAreaElement | null>(null);

  const handleChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    setPrompt(e.target.value);
  };

  const handleSubmit = () => {
    if (!inputValue.trim()) return;
    setInputValue("");
    textareaRef.current?.focus();
  };

  const { prompt, setPrompt } = usePrompt();

  const dummyPost = async ({
    data,
  }: {
    data: { id: number; title: string };
  }) => {
    const response = await fetch("/api/hello", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    });
    const result = await response.json();
    console.log(result);
  };

  const dummyGet = async () => {
    const response = await fetch("/api/hello", { method: "GET" });
    const result = await response.json();
    console.log(result);
  };

  return (
    <div className="w-full h-full flex flex-col gap-14 justify-center items-center">
      <h3 className="text-gradient font-roboto text-5xl">Hello, Deep</h3>
      <div className="relative w-[45vw] rounded-3xl p-[2px] transition-transform duration-300 overflow-hidden bg-[conic-gradient(from_var(--angle),_#020618,_#52a9ff,_#2424b6,_#2a6ab8,_#7dd3fc,_#020618)] animate-border-gradient">
        <div className="transition-transform duration-300 p-2 rounded-3xl bg-neutral-900 backdrop-blur-xl font-roboto text-3xl mx-auto border border-neutral-600">
          <Input
            handleChange={handleChange}
            textareaRef={textareaRef}
            inputValue={prompt}
          />
          <div className="flex justify-between items-center">
            <div className="flex items-center gap-4"></div>
            <SubmitButton handleSubmit={handleSubmit} />
          </div>
        </div>
      </div>
    </div>
  );
}
