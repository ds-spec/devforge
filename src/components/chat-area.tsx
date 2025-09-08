"use client";

import usePrompt from "@/hooks/usePrompt";

export default function ChatArea({ prompt }: { prompt: string }) {
  // const { prompt } = usePrompt();
  return (
    <div className="h-full w-fit bg-neutral-800 rounded-3xl text-white px-5 py-2">
      <h4>{prompt}</h4>
    </div>
  );
}
