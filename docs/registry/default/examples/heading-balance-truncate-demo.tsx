import type * as React from "react";

import { Heading } from "@/registry/default/ui/heading";

export default function HeadingBalanceTruncateDemo(): React.ReactElement {
  return (
    <div className="flex flex-col gap-4">
      <div>
        <span className="text-muted-foreground mb-2 block text-sm">
          balance (default: true)
        </span>
        <Heading size="h4" balance={false}>
          Heading
        </Heading>
      </div>
      <div>
        <span className="text-muted-foreground mb-2 block text-sm">
          truncate
        </span>
        <div className="w-48">
          <Heading size="h4" truncate>
            Heading
          </Heading>
        </div>
      </div>
    </div>
  );
}
