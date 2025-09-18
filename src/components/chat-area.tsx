"use client";

export default function ChatArea({ prompt }: { prompt: string }) {
  return (
    <div className="h-full max-w-lg bg-neutral-800 rounded-3xl text-white px-5 py-2">
      <h4>{prompt}</h4>
    </div>
  );
}
