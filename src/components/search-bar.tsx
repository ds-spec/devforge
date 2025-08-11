"use client";

import { ArrowUp } from "lucide-react";
import { Textarea } from "./ui/textarea";
import { useRef, useState } from "react";

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
      placeholder="Ask GPT"
      className="bg-transparent w-full focus:outline-none rounded-3xl border-none shadow-none  focus:!ring-transparent text-white !placeholder-neutral-300/30 !text-lg break-words resize-none"
    />
  );
};

export default function SearchBar() {
  const [inputValue, setInputValue] = useState("");
  const textareaRef = useRef<HTMLTextAreaElement | null>(null);

  const handleChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    setInputValue(e.target.value);
  };

  const handleSubmit = () => {
    if (!inputValue.trim()) return;
    setInputValue("");
    textareaRef.current?.focus();
  };

  return (
    <div className="w-full h-full flex flex-col gap-20 justify-center items-center">
      <h3 className="text-gradient font-roboto text-4xl">Hello, Synth</h3>
      <div className="relative w-[45vw] rounded-3xl p-[2px] transition-transform duration-300 overflow-hidden bg-[conic-gradient(from_var(--angle),_#020618,_#52a9ff,_#2424b6,_#2a6ab8,_#7dd3fc,_#020618)] animate-border-gradient">
        <div className="transition-transform duration-300 p-2 rounded-3xl bg-neutral-900 backdrop-blur-xl font-roboto text-3xl mx-auto border border-neutral-600">
          <Input
            handleChange={handleChange}
            textareaRef={textareaRef}
            inputValue={inputValue}
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
