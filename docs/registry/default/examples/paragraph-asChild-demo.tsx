import type * as React from "react";

import { Paragraph } from "@/registry/default/ui/paragraph";

export default function ParagraphAsChildDemo(): React.ReactElement {
  return (
    <div className="flex flex-col gap-2">
      <Paragraph asChild size="base">
        <a href="#">Paragraph as Link</a>
      </Paragraph>
      <p className="text-muted-foreground text-sm">
        Use <code>asChild</code> to merge props with your child element.
      </p>
    </div>
  );
}
