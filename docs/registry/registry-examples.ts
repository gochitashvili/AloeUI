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
  {
    name: "heading-size-demo",
    type: "registry:example",
    registryDependencies: ["heading"],
    files: [
      {
        path: "examples/heading-size-demo.tsx",
        type: "registry:example",
      },
    ],
  },
  {
    name: "heading-weight-demo",
    type: "registry:example",
    registryDependencies: ["heading"],
    files: [
      {
        path: "examples/heading-weight-demo.tsx",
        type: "registry:example",
      },
    ],
  },
  {
    name: "heading-muted-demo",
    type: "registry:example",
    registryDependencies: ["heading"],
    files: [
      {
        path: "examples/heading-muted-demo.tsx",
        type: "registry:example",
      },
    ],
  },
  {
    name: "heading-tracking-demo",
    type: "registry:example",
    registryDependencies: ["heading"],
    files: [
      {
        path: "examples/heading-tracking-demo.tsx",
        type: "registry:example",
      },
    ],
  },
  {
    name: "heading-balance-truncate-demo",
    type: "registry:example",
    registryDependencies: ["heading"],
    files: [
      {
        path: "examples/heading-balance-truncate-demo.tsx",
        type: "registry:example",
      },
    ],
  },
  {
    name: "heading-as-demo",
    type: "registry:example",
    registryDependencies: ["heading"],
    files: [
      {
        path: "examples/heading-as-demo.tsx",
        type: "registry:example",
      },
    ],
  },
];
