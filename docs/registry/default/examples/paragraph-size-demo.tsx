import type * as React from "react";

import { Paragraph } from "@/registry/default/ui/paragraph";

export default function ParagraphSizeDemo(): React.ReactElement {
  return (
    <div className="flex flex-col gap-2">
      <Paragraph size="xs">Paragraph</Paragraph>
      <Paragraph size="sm">Paragraph</Paragraph>
      <Paragraph size="base">Paragraph</Paragraph>
      <Paragraph size="lg">Paragraph</Paragraph>
      <Paragraph size="xl">Paragraph</Paragraph>
      <Paragraph size="2xl">Paragraph</Paragraph>
      <Paragraph size="3xl">Paragraph</Paragraph>
    </div>
  );
}
