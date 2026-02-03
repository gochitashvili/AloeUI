"use client";

import { Shell } from "@/components/shell";
import { Button } from "@/components/ui/button";
import { Heading } from "@/registry/default/ui/heading";
import Link from "next/link";

export default function MessageTestPage() {
  return (
    <Shell>
      <div className="container flex flex-col items-center justify-center gap-4 py-16">
        <Heading size="h2">Message component</Heading>
        <p className="text-muted-foreground text-center">
          Message is on hold. Use this page later to test it.
        </p>
        <Button asChild variant="outline">
          <Link href="/docs/components/heading">View Heading component</Link>
        </Button>
      </div>
    </Shell>
  );
}
