import type { Registry } from "shadcn/schema";

export const ui: Registry["items"] = [
  {
    name: "heading",
    type: "registry:ui",
    dependencies: ["@radix-ui/react-slot", "class-variance-authority"],
    files: [
      {
        path: "ui/heading.tsx",
        type: "registry:ui",
      },
    ],
  },
  {
    name: "paragraph",
    type: "registry:ui",
    dependencies: ["@radix-ui/react-slot", "class-variance-authority"],
    files: [
      {
        path: "ui/paragraph.tsx",
        type: "registry:ui",
      },
    ],
  },
];
