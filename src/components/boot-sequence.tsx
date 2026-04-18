"use client";

import { useEffect, useState, useCallback } from "react";

const bootLines = [
  { text: "BIOS v1.0.0 // secure boot disabled", delay: 0 },
  { text: "loading kernel... [ OK ]", delay: 300 },
  { text: "mounting filesystems... [ OK ]", delay: 600 },
  { text: 'decoding host: 0x50 0x53 0x57 → "PSW"', delay: 900 },
  { text: "resolving identity... match found", delay: 1200 },
  { text: "", delay: 1500 },
  { text: "$ whoami", delay: 1800, highlight: true },
  {
    text: "pyaesonewin // penetration tester, full-stack developer, bug bounty hunter",
    delay: 2100,
    highlight: true,
  },
];

export function BootSequence({ onComplete }: { onComplete: () => void }) {
  const [visibleLines, setVisibleLines] = useState(0);
  const [skipped, setSkipped] = useState(false);

  const skip = useCallback(() => {
    setSkipped(true);
    setVisibleLines(bootLines.length);
    onComplete();
  }, [onComplete]);

  useEffect(() => {
    if (skipped) return;

    const timers = bootLines.map((line, i) =>
      setTimeout(() => {
        setVisibleLines(i + 1);
        if (i === bootLines.length - 1) {
          setTimeout(onComplete, 800);
        }
      }, line.delay)
    );

    return () => timers.forEach(clearTimeout);
  }, [onComplete, skipped]);

  useEffect(() => {
    const handleKey = (e: KeyboardEvent) => {
      if (!skipped) skip();
    };

    window.addEventListener("keydown", handleKey);
    return () => window.removeEventListener("keydown", handleKey);
  }, [skip, skipped]);

  return (
    <div className="font-mono text-sm leading-relaxed cursor-pointer" onClick={skip}>
      {bootLines.slice(0, visibleLines).map((line, i) => (
        <div
          key={i}
          className={`boot-line ${
            line.highlight ? "text-green text-glow" : "text-muted"
          }`}
          style={{ animationDelay: skipped ? "0ms" : `${i * 50}ms` }}
        >
          {line.text}
        </div>
      ))}
      {!skipped && visibleLines < bootLines.length && (
        <div className="mt-4 text-xs text-muted/50 animate-pulse">
          press any key or click to skip
        </div>
      )}
    </div>
  );
}
