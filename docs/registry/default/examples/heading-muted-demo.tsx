import type * as React from "react";

import { Heading } from "@/registry/default/ui/heading";

export default function HeadingMutedDemo(): React.ReactElement {
  return (
    <div className="flex flex-col gap-2">
      <Heading size="h3">Heading</Heading>
      <Heading size="h3" muted>
        Heading
      </Heading>
    </div>
  );
}
