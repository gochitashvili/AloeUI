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
    name: "message",
    type: "registry:ui",
    dependencies: ["@radix-ui/react-slot", "class-variance-authority"],
    files: [
      {
        path: "ui/message.tsx",
        type: "registry:ui",
      },
    ],
  },
];
