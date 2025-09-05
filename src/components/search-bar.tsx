"use client";

import { ArrowUp } from "lucide-react";
import { Textarea } from "./ui/textarea";
import { useEffect, useRef, useState } from "react";
import usePrompt from "@/hooks/usePrompt";
import { Button } from "./ui/button";
import { prisma } from "@/lib/prisma";
import { motion } from "motion/react";
import { useSession } from "next-auth/react";

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
      className="max-h-[300px] text-white !text-lg border-none resize-none focus:!ring-transparent focus:outline-none overflow-scroll placeholder:text-neutral-600"
    />
  );
};

export default function SearchBar() {
  const [inputValue, setInputValue] = useState("");
  const [isEntered, setIsEntered] = useState(false);
  const textareaRef = useRef<HTMLTextAreaElement | null>(null);
  const { data: session } = useSession();

  const handleChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    setPrompt(e.target.value);
  };

  const { prompt, setPrompt } = usePrompt();
  console.log(prompt, "prompt");

  const handleResponse = async () => {
    const res = await fetch("/api/gemini", {
      method: "POST",
      body: JSON.stringify({ prompt }),
    });
    const data = await res.json();
    console.log(data);
  };

  const handleSubmit = async () => {
    // if (!inputValue.trim()) return;
    // handleResponse();
    setInputValue("");
    setIsEntered(true);
    textareaRef.current?.focus();
  };

  return (
    <motion.div
      animate={{ y: isEntered ? 320 : 0 }}
      transition={{ type: "spring", damping: 25, stiffness: 100 }}
      className="w-full h-full flex flex-col gap-14 justify-center items-center"
    >
      {!isEntered && (
        <motion.h3
          initial={{ opacity: 0, y: 0 }}
          animate={{ opacity: 1, y: -30 }}
          transition={{ duration: 0.5, ease: "easeIn" }}
          className={`text-gradient ${
            !session?.user ? "leading-8 font-semibold" : ""
          } text-center font-roboto text-3xl md:text-4xl`}
        >
          {session?.user ? (
            `Hello, ${session?.user?.name}`
          ) : (
            <>
              Meet Synth, <br /> Your Personal Research Assistant!
            </>
          )}
        </motion.h3>
      )}
      <div className="relative bottom-0 w-[95vw] md:w-[70vw] lg:w-[50vw] shadow-xl shadow-black/20 rounded-3xl p-[2px] transition-transform duration-300 overflow-hidden">
        <div className="transition-all duration-200 p-2 rounded-3xl bg-neutral-900 backdrop-blur-xl font-roboto text-3xl mx-auto border border-neutral-800 focus-within:!border-neutral-600 ">
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
    </motion.div>
  );
}
