"use client";

import { PromptContext } from "@/context/PromptContext";
import { useContext } from "react";

export default function usePrompt() {
  const context = useContext(PromptContext);
  if (!context) {
    throw Error("usePrompt must be used within PromptProvider");
  }
  return context;
}
