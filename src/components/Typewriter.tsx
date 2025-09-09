"use client";

import { useEffect, useState } from "react";

export default function Typewriter({
  text,
  speed,
}: {
  text: string;
  speed: number;
}) {
  const [outputText, setOutputText] = useState("");
  useEffect(() => {
    const splittedText = text.split("");
    console.log(splittedText);
    for (let i = 0; i < splittedText.length; i++) {
      setTimeout(() => {
        console.log(splittedText[i]);
        setOutputText(splittedText[i]);
      }, speed * 1000);
    }
  }, [text, speed]);
  return <div className="text-white text-lg px-8">{outputText}</div>;
}
