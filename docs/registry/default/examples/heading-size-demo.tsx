import type * as React from "react";

import { Heading } from "@/registry/default/ui/heading";

export default function HeadingSizeDemo(): React.ReactElement {
  return (
    <div className="flex flex-col gap-2">
      <Heading size="h1">Heading</Heading>
      <Heading size="h2">Heading</Heading>
      <Heading size="h3">Heading</Heading>
      <Heading size="h4">Heading</Heading>
      <Heading size="h5">Heading</Heading>
      <Heading size="h6">Heading</Heading>
    </div>
  );
}
