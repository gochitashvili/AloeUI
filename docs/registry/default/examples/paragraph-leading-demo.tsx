import type * as React from "react";

import { Paragraph } from "@/registry/default/ui/paragraph";

export default function ParagraphLeadingDemo(): React.ReactElement {
  return (
    <div className="flex flex-col gap-4 max-w-md">
      <div>
        <span className="text-muted-foreground mb-1 block text-sm">
          leading=&quot;snug&quot;
        </span>
        <Paragraph size="base" leading="snug">
          The quick brown fox jumps over the lazy dog. Lorem ipsum dolor sit
          amet, consectetur adipiscing elit.
        </Paragraph>
      </div>
      <div>
        <span className="text-muted-foreground mb-1 block text-sm">
          leading=&quot;normal&quot;
        </span>
        <Paragraph size="base" leading="normal">
          The quick brown fox jumps over the lazy dog. Lorem ipsum dolor sit
          amet, consectetur adipiscing elit.
        </Paragraph>
      </div>
      <div>
        <span className="text-muted-foreground mb-1 block text-sm">
          leading=&quot;relaxed&quot;
        </span>
        <Paragraph size="base" leading="relaxed">
          The quick brown fox jumps over the lazy dog. Lorem ipsum dolor sit
          amet, consectetur adipiscing elit.
        </Paragraph>
      </div>
    </div>
  );
}
