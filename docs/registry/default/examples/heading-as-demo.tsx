import type * as React from "react";

import { Heading } from "@/registry/default/ui/heading";

export default function HeadingAsDemo(): React.ReactElement {
  return (
    <div className="flex flex-col gap-2">
      <Heading as="h3" size="h1">
        Heading
      </Heading>
      <p className="text-muted-foreground text-sm">
        Use the <code>as</code> prop to override the rendered HTML element for
        accessibility.
      </p>
    </div>
  );
}
