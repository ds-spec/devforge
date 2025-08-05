"use client";

import { motion } from "motion/react";
import { useEffect, useMemo, useState } from "react";

type Position = {
  top: string;
  left: string;
};
export default function FloatingSnippets() {
  const [positions, setPositions] = useState<Position[]>([]);
  const codeBreakdown = useMemo(
    () => [
      'console.log("Hello World")',
      "function createAwesome()",
      "const future = await build()",
      "git push origin main",
      "npm run deploy",
      "docker-compose up",
      "kubectl scale --replicas=10",
      "terraform apply",
      "yarn install",
      "pip install requirements.txt",
      "cargo build --release",
      "go mod tidy",
      "rustc --version",
      "node --version",
      "python3 app.py",
    ],
    []
  );

  useEffect(() => {
    setPositions(
      codeBreakdown.map(() => ({
        left: `${Math.random() * 90}%`,
        top: `${Math.random() * 90}%`,
      }))
    );
  }, [codeBreakdown]);

  if (positions.length === 0) return null;

  return (
    <div className="relative w-full h-screen" aria-hidden="true">
      {codeBreakdown.map((code, idx) => {
        const { top, left } = positions[idx];
        return (
          <motion.div
            animate={{ opacity: 1, y: [0, -5, 0] }}
            transition={{
              delay: idx * 0.4,
              duration: 5,
              repeat: Infinity,
              repeatType: "mirror",
            }}
            style={{
              left: left,
              top: top,
            }}
            className="absolute text-xs font-mono text-green-400/30 shadow-lg pointer-events-none"
            key={idx}
          >
            {code}
          </motion.div>
        );
      })}
    </div>
  );
}
