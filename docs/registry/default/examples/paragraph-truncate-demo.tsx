import type * as React from "react";

import { Paragraph } from "@/registry/default/ui/paragraph";

export default function ParagraphTruncateDemo(): React.ReactElement {
  return (
    <div className="w-48">
      <Paragraph size="base" truncate>
        This paragraph will truncate with an ellipsis when it overflows.
      </Paragraph>
    </div>
  );
}
