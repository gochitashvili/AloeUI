"use client";

import { animate, spring } from "animejs";
import * as React from "react";

interface AnimatedMessageProps {
  children: React.ReactNode;
}

export function AnimatedMessage({ children }: AnimatedMessageProps) {
  const ref = React.useRef<HTMLDivElement>(null);

  React.useEffect(() => {
    const el = ref.current;
    if (!el) return;

    animate(el, {
      opacity: [0, 1],
      translateY: [12, 0],
      ease: spring({ bounce: 0.15, duration: 350 }),
    });
  }, []);

  return <div ref={ref}>{children}</div>;
}
