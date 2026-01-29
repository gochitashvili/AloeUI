import type { Registry } from "shadcn/schema";

export const examples: Registry["items"] = [
  {
    name: "heading-demo",
    type: "registry:example",
    registryDependencies: ["heading"],
    files: [
      {
        path: "examples/heading-demo.tsx",
        type: "registry:example",
      },
    ],
  },
];
