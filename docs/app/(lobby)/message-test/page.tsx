"use client";

import { RefreshCcwIcon } from "lucide-react";
import { useCallback, useEffect, useState } from "react";
import { Demo } from "@/components/demo";
import { Shell } from "@/components/shell";
import { Button } from "@/components/ui/button";
import { Message } from "@/registry/default/ui/message";

const SIMULATION_DELAY_MS = 4000;

export default function MessageTestPage() {
  const [userMessageState, setUserMessageState] = useState<
    "loading" | "default"
  >("loading");
  const [errorMessageState, setErrorMessageState] = useState<
    "loading" | "error"
  >("loading");

  const runSimulation = useCallback(() => {
    setUserMessageState("loading");
    setErrorMessageState("loading");

    const t = setTimeout(() => {
      setUserMessageState("default");
      setErrorMessageState("error");
    }, SIMULATION_DELAY_MS);

    return () => clearTimeout(t);
  }, []);

  useEffect(() => {
    runSimulation();
  }, [runSimulation]);

  return (
    <Shell>
      <Demo>
        <div className="flex w-full max-w-2xl flex-col gap-8">
          <Button size="icon" onClick={runSimulation} variant="outline">
            <RefreshCcwIcon className="size-4" />
          </Button>
          <section className="flex flex-col gap-2">
            <Message state={errorMessageState}>
              Hello, Can you generate a image of a cat?
            </Message>
          </section>
        </div>
      </Demo>
    </Shell>
  );
}
