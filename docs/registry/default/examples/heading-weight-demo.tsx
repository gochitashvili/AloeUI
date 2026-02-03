import type * as React from "react";

import { Heading } from "@/registry/default/ui/heading";

export default function HeadingWeightDemo(): React.ReactElement {
  return (
    <div className="flex flex-col gap-2">
      <Heading size="h3" weight="normal">
        Heading
      </Heading>
      <Heading size="h3" weight="medium">
        Heading
      </Heading>
      <Heading size="h3" weight="semibold">
        Heading
      </Heading>
      <Heading size="h3" weight="bold">
        Heading
      </Heading>
    </div>
  );
}
