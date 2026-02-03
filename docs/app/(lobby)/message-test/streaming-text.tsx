"use client";

import { animate, spring } from "animejs";
import * as React from "react";

interface StreamingTextProps {
  content: string;
  animateWords: boolean;
  className?: string;
}

export function StreamingText({
  content,
  animateWords,
  className,
}: StreamingTextProps) {
  const rootRef = React.useRef<HTMLSpanElement>(null);
  const prevLengthRef = React.useRef(0);

  React.useEffect(() => {
    if (!animateWords || !rootRef.current) return;

    const parts = content.split(/(\s+)/);
    if (parts.length <= prevLengthRef.current) return;
    if (parts.length === 1 && parts[0] === "") return;

    const lastIndex = parts.length - 1;
    prevLengthRef.current = parts.length;

    const target = rootRef.current.querySelector(
      `[data-streaming-part="${lastIndex}"]`,
    );
    if (!target) return;

    animate(target, {
      opacity: [0, 1],
      translateY: [-6, 0],
      scale: [0.92, 1],
      ease: spring({ bounce: 0.2, duration: 400 }),
    });
  }, [content, animateWords]);

  const parts = content.split(/(\s+)/);

  return (
    <span ref={rootRef} className={className}>
      {parts.map((part, i) => (
        <span key={i} data-streaming-part={i} className="inline">
          {part}
        </span>
      ))}
    </span>
  );
}
