import type { CompositionProps, EmptyProps } from "@/types";

/**
 * Props for the `Message` component.
 *
 * Renders a message container with variant (user/ai), size, and state.
 * Styles are left empty for custom styling via data attributes or class overrides.
 */
export interface MessageProps extends EmptyProps<"div">, CompositionProps {
  /**
   * Message type: user or ai.
   *
   * @default "user"
   */
  variant?: "user" | "ai";

  /**
   * Size of the message.
   *
   * @default "default"
   */
  size?: "default" | "sm" | "lg";

  /**
   * Visual/UX state (e.g. for loading or error styling).
   *
   * @default "default"
   */
  state?: "default" | "loading" | "error";

  /**
   * Whether to merge props with the immediate child using `@radix-ui/react-slot`.
   *
   * @default false
   */
  asChild?: boolean;
}
