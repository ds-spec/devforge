"use client";
import { createContext, useState } from "react";

type PromptContextType = {
  prompt: string;
  setPrompt: (prompt: string) => void;
};

export const PromptContext = createContext<PromptContextType | undefined>(
  undefined
);

export default function PromptProvider({
  children,
}: {
  children: React.ReactNode;
}) {
  const [prompt, setPrompt] = useState("");
  return (
    <PromptContext.Provider value={{ prompt, setPrompt }}>
      {children}
    </PromptContext.Provider>
  );
}
