import Link from "next/link";
import { Button } from "@/components/ui/button";

export default function MasonryDemoPage() {
  return (
    <div className="container flex flex-col items-center justify-center gap-4 py-16">
      <p className="text-muted-foreground">
        This demo has been removed. Only the Heading component is available.
      </p>
      <Button asChild variant="outline">
        <Link href="/docs/components/heading">View Heading component</Link>
      </Button>
    </div>
  );
}
