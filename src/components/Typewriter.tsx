"use client";

import { useEffect, useState } from "react";
import ReactMarkdown from "react-markdown";
import remarkGfm from "remark-gfm";

export default function Typewriter({
  text,
  speed,
}: {
  text: string;
  speed: number;
}) {
  const [outputText, setOutputText] = useState("");
  const [currentIndex, setCurrentIndex] = useState(0);

  // console.log(outputText);
  useEffect(() => {
    if (currentIndex < text.length) {
      const timer = setTimeout(() => {
        setOutputText((prev) => prev + text[currentIndex]);
        setCurrentIndex((prev) => prev + 1);
      }, speed);
      return () => clearTimeout(timer);
    }
  }, [text, speed, currentIndex]);

  useEffect(() => {
    setOutputText("");
    setCurrentIndex(0);
  }, [text]);

  return (
    <div className="text-white text-lg px-8 whitespace-break-spaces">
      {outputText}
      {/* <ReactMarkdown remarkPlugins={[remarkGfm]}></ReactMarkdown> */}
    </div>
  );
}
