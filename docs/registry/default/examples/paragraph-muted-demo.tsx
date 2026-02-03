import type * as React from "react";

import { Paragraph } from "@/registry/default/ui/paragraph";

export default function ParagraphMutedDemo(): React.ReactElement {
  return (
    <div className="flex flex-col gap-2">
      <Paragraph size="base">Paragraph</Paragraph>
      <Paragraph size="base" muted>
        Paragraph
      </Paragraph>
    </div>
  );
}
