"use client";

import { ArrowUp } from "lucide-react";
import { Textarea } from "./ui/textarea";
import { useEffect, useRef, useState } from "react";
import usePrompt from "@/hooks/usePrompt";
import { Button } from "./ui/button";
import { prisma } from "@/lib/prisma";
import { motion } from "motion/react";
import { useSession } from "next-auth/react";
import ChatArea from "./chat-area";
import ResponseArea from "./response-area";
import Typewriter from "./Typewriter";

interface InputProps {
  textareaRef: React.RefObject<HTMLTextAreaElement | null>;
  inputValue: string;
  handleChange: (e: React.ChangeEvent<HTMLTextAreaElement>) => void;
  handleSubmit: () => void;
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

const Input = ({
  textareaRef,
  inputValue,
  handleChange,
  handleSubmit,
}: InputProps) => {
  return (
    <Textarea
      onKeyDown={(e) => {
        if (e.key === "Enter" && !e.shiftKey) {
          e.preventDefault();
          handleSubmit();
        }
      }}
      ref={textareaRef}
      value={inputValue}
      aria-label="Enter your input here"
      onChange={handleChange}
      placeholder="Ask Synth"
      className="max-h-[300px] text-white !text-lg border-none resize-none focus:!ring-transparent focus:outline-none overflow-scroll placeholder:text-neutral-600"
    />
  );
};

export default function SearchBar({
  isEntered,
  setIsEntered,
}: {
  isEntered: boolean;
  setIsEntered: (isEntered: boolean) => void;
}) {
  const [messages, setMessages] = useState<
    { prompt: string; responseData: string }[]
  >([]);
  // const [isEntered, setIsEntered] = useState(false);
  const textareaRef = useRef<HTMLTextAreaElement | null>(null);
  const { data: session } = useSession();

  // const messages: {
  //   prompt: string;
  //   responseData: string;
  // }[] = [];
  console.log(messages, "messages");

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
    return data.message;
  };

  const handleSubmit = async () => {
    if (!prompt.trim()) return;
    const responseData = await handleResponse();
    setMessages((prev) => [...prev, { prompt, responseData }]);
    setPrompt("");
    setIsEntered(true);
    textareaRef.current?.focus();
  };

  return (
    <>
      {isEntered && (
        <div className="absolute left-1/2 -translate-x-1/2 top-1/12 w-[95vw] md:w-[70vw] lg:w-[50vw] overflow-hidden">
          {messages?.map((message, idx) => (
            <div key={idx} className="mb-5">
              <div key={message.prompt} className="w-full flex justify-end">
                <ChatArea prompt={message.prompt} />
              </div>
              <div
                key={message.responseData}
                className="w-full flex justify-start mt-4"
              >
                <ResponseArea responseData={message.responseData} />
              </div>
            </div>
          ))}
        </div>
      )}

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

        <div className="relative w-[95vw] md:w-[70vw] lg:w-[50vw] shadow-xl shadow-black/20 rounded-3xl p-[2px] transition-transform duration-300 overflow-hidden">
          <div className="transition-all duration-200 p-2 rounded-3xl bg-neutral-900 backdrop-blur-xl font-roboto text-3xl mx-auto border border-neutral-800 focus-within:!border-neutral-600 ">
            <Input
              handleChange={handleChange}
              textareaRef={textareaRef}
              inputValue={prompt}
              handleSubmit={handleSubmit}
            />
            <div className="flex justify-between items-center">
              <div className="flex items-center gap-4"></div>
              <SubmitButton handleSubmit={handleSubmit} />
            </div>
          </div>
        </div>
      </motion.div>
    </>
  );
}
