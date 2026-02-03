import type { CompositionProps, EmptyProps } from "@/types";

/**
 * Props for the `Paragraph` component.
 *
 * Renders body text with size, weight, leading, and asChild for composition.
 */
export interface ParagraphProps extends EmptyProps<"p">, CompositionProps {
  /**
   * Text size.
   *
   * @default "base"
   */
  size?: "xs" | "sm" | "base" | "lg" | "xl" | "2xl" | "3xl";

  /**
   * Font weight.
   *
   * @default "normal"
   */
  weight?: "normal" | "medium" | "semibold";

  /**
   * Use muted (secondary) text color.
   *
   * @default false
   */
  muted?: boolean;

  /**
   * Line height.
   *
   * @default "normal"
   */
  leading?: "snug" | "normal" | "relaxed";

  /**
   * Truncate with ellipsis when overflow.
   *
   * @default false
   */
  truncate?: boolean;

  /**
   * Whether to merge props with the immediate child using `@radix-ui/react-slot`.
   *
   * @default false
   */
  asChild?: boolean;
}
