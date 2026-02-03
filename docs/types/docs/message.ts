import type { CompositionProps, EmptyProps } from "@/types";

/**
 * Props for the `Message` component.
 *
 * Renders a message container with user/ai variants.
 */
export interface MessageProps extends EmptyProps<"div">, CompositionProps {
  /**
   * Message variant: user or ai.
   *
   * @default "user"
   */
  variant?: "user" | "ai";

  /**
   * Content alignment.
   *
   * @default "start"
   */
  align?: "start" | "center" | "end";

  /**
   * When true, applies streaming styles (shimmer, mask fade).
   *
   * @default false
   */
  streaming?: boolean;
}
