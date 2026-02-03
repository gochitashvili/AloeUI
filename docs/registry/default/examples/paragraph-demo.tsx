import type * as React from "react";

import { Paragraph } from "@/registry/default/ui/paragraph";

export default function ParagraphDemo(): React.ReactElement {
  return (
    <div className="flex flex-col gap-4">
      <Paragraph size="xs">Extra small body text.</Paragraph>
      <Paragraph size="sm">Small body text.</Paragraph>
      <Paragraph size="base">Base body text.</Paragraph>
      <Paragraph size="lg">Large body text.</Paragraph>
      <Paragraph size="xl">Extra large body text.</Paragraph>
      <Paragraph size="2xl">2XL body text.</Paragraph>
      <Paragraph size="3xl">3XL body text.</Paragraph>
    </div>
  );
}
