import type * as React from "react";

import { Heading } from "@/registry/default/ui/heading";

export default function HeadingAsChildDemo(): React.ReactElement {
  return (
    <div className="flex flex-col gap-2">
      <Heading asChild size="h2">
        <a href="#">Heading as Link</a>
      </Heading>
      <p className="text-muted-foreground text-sm">
        Use <code>asChild</code> to merge props with your child element.
      </p>
    </div>
  );
}
