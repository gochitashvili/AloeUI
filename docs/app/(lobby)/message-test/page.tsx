"use client";

import { CopyIcon, RefreshCcwIcon } from "lucide-react";
import { useCallback, useEffect, useRef, useState } from "react";
import { Demo } from "@/components/demo";
import { Shell } from "@/components/shell";
import { Button } from "@/components/ui/button";
import {
  Message,
  MessageAction,
  MessageActions,
  MessageContent,
} from "@/registry/default/ui/message";
import { AnimatedMessage } from "./animated-message";
import { StreamingText } from "./streaming-text";

interface ChatMessage {
  id: string;
  variant: "user" | "ai";
  content: string;
  streaming?: boolean;
}

const CHAT_MESSAGES: ChatMessage[] = [
  {
    id: "1",
    variant: "user",
    content: "Hello! Can you help me with something?",
  },
  {
    id: "2",
    variant: "ai",
    content: "Of course! I'd be happy to help. What do you need?",
  },
  {
    id: "3",
    variant: "user",
    content: "Can you explain how streaming works in chat applications?",
  },
  {
    id: "4",
    variant: "ai",
    content:
      "Streaming in chat applications means the response is sent incrementally as it's generated, rather than waiting for the complete answer. Users see text appear word by word in real-time, which creates a more responsive and engaging experience. This is common in AI assistants like ChatGPT.",
  },
  {
    id: "5",
    variant: "user",
    content: "That makes sense. What about the UI components?",
  },
  {
    id: "6",
    variant: "ai",
    content:
      "For streaming UI, you typically need a message component that supports progressive content updates, smooth animations for each new word or chunk, and visual feedback like a shimmer effect while the response is being generated. The Message component you're testing includes these features.",
  },
  {
    id: "7",
    variant: "user",
    content: "Perfect! Thanks for the explanation.",
  },
  {
    id: "8",
    variant: "ai",
    content:
      "You're welcome! If you have any more questions about streaming, chat interfaces, or anything else, feel free to ask. Happy building!",
  },
];

const INITIAL_DELAY_MS = 3000;
const AFTER_FIRST_AI_DELAY_MS = 3000;
const MESSAGE_DELAY_MS = 300;
const WORD_DELAY_MS = 50;

export default function MessageTestPage() {
  const [messages, setMessages] = useState<
    Array<ChatMessage & { displayedContent: string }>
  >([]);
  const [isRunning, setIsRunning] = useState(false);
  const cancelledRef = useRef(false);

  const runSimulation = useCallback(async () => {
    cancelledRef.current = false;
    setIsRunning(true);
    setMessages([]);

    // Simulated user "typing" delay before first message
    await new Promise((r) => setTimeout(r, INITIAL_DELAY_MS));
    if (cancelledRef.current) return;

    for (let msgIndex = 0; msgIndex < CHAT_MESSAGES.length; msgIndex++) {
      const msg = CHAT_MESSAGES[msgIndex];
      if (!msg || cancelledRef.current) break;

      const prevMsg = msgIndex > 0 ? CHAT_MESSAGES[msgIndex - 1] : null;
      if (msg.variant === "user" && prevMsg?.variant === "ai") {
        // Pause after AI response before user sends next message
        await new Promise((r) => setTimeout(r, AFTER_FIRST_AI_DELAY_MS));
        if (cancelledRef.current) break;
      }

      if (msg.variant === "user") {
        setMessages((prev) => [
          ...prev,
          { ...msg, displayedContent: msg.content, streaming: false } as ChatMessage & {
            displayedContent: string;
          },
        ]);
        await new Promise((r) => setTimeout(r, MESSAGE_DELAY_MS));
        continue;
      }

      setMessages((prev) => [
        ...prev,
        { ...msg, displayedContent: "", streaming: true } as ChatMessage & {
          displayedContent: string;
        },
      ]);

      const words = msg.content.split(/(\s+)/);
      for (let wordIndex = 0; wordIndex < words.length; wordIndex++) {
        if (cancelledRef.current) break;
        // Simulated streaming: reveal one word at a time
        await new Promise((r) => setTimeout(r, WORD_DELAY_MS));
        const displayedContent = words.slice(0, wordIndex + 1).join("");
        setMessages((prev) => {
          const updated = [...prev];
          updated[updated.length - 1] = {
            ...msg,
            displayedContent,
            streaming: true,
          } as ChatMessage & { displayedContent: string };
          return updated;
        });
      }

      setMessages((prev) => {
        const updated = [...prev];
        const last = updated[updated.length - 1];
        updated[updated.length - 1] = {
          ...msg,
          displayedContent: last?.displayedContent ?? msg.content,
          streaming: false,
        } as ChatMessage & { displayedContent: string };
        return updated;
      });
      // Brief pause between messages
      await new Promise((r) => setTimeout(r, MESSAGE_DELAY_MS));
    }

    setIsRunning(false);
  }, []);

  const onRestart = useCallback(() => {
    cancelledRef.current = true;
    runSimulation();
  }, [runSimulation]);

  useEffect(() => {
    runSimulation();
    return () => {
      cancelledRef.current = true;
    };
  }, [runSimulation]);

  return (
    <Shell>
      <Demo>
        <div className="flex w-full max-w-2xl flex-col gap-8">
          <Button
            variant="outline"
            size="sm"
            onClick={onRestart}
            disabled={isRunning}
          >
            <RefreshCcwIcon className="size-4" />
            {isRunning ? "Running…" : "Run simulation"}
          </Button>
          <section className="flex flex-col gap-2">
            {messages.map((msg) => (
              <AnimatedMessage key={msg.id}>
                <Message
                  variant={msg.variant}
                  align={msg.variant === "user" ? "end" : "start"}
                  streaming={msg.streaming}
                >
                  <MessageContent>
                    <StreamingText
                      content={msg.displayedContent}
                      animateWords={msg.variant === "ai"}
                    />
                  </MessageContent>
                  <MessageActions variant="hover">
                    <MessageAction variant="ghost" size="icon-sm">
                      <CopyIcon className="size-3.5" />
                    </MessageAction>
                    {msg.variant === "ai" && (
                      <MessageAction variant="ghost" size="icon-sm">
                        <RefreshCcwIcon className="size-3.5" />
                      </MessageAction>
                    )}
                  </MessageActions>
                </Message>
              </AnimatedMessage>
            ))}
          </section>
        </div>
      </Demo>
    </Shell>
  );
}
