import type * as React from "react";

import { Paragraph } from "@/registry/default/ui/paragraph";

export default function ParagraphWeightDemo(): React.ReactElement {
  return (
    <div className="flex flex-col gap-2">
      <Paragraph size="base" weight="normal">
        Paragraph
      </Paragraph>
      <Paragraph size="base" weight="medium">
        Paragraph
      </Paragraph>
      <Paragraph size="base" weight="semibold">
        Paragraph
      </Paragraph>
    </div>
  );
}
