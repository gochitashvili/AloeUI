import type { CompositionProps, EmptyProps } from "@/types";

/**
 * Props for the `Heading` component.
 *
 * Renders typographic headings (h1–h6) with responsive sizes,
 * weight, tracking, leading, and optional polymorphic rendering.
 *
 * When using `as`, the `ref` type is inferred from the element:
 * - `as="h1"` → `React.Ref<HTMLHeadingElement>`
 * - `as="div"` → `React.Ref<HTMLDivElement>`
 */
export interface HeadingProps extends EmptyProps<"h1">, CompositionProps {
  /**
   * Visual size of the heading (h1–h6).
   *
   * @default "h1"
   */
  size?: "h1" | "h2" | "h3" | "h4" | "h5" | "h6";

  /**
   * Font weight.
   *
   * @default "bold"
   */
  weight?: "normal" | "medium" | "semibold" | "bold";

  /**
   * Use muted (secondary) text color.
   *
   * @default false
   */
  muted?: boolean;

  /**
   * Letter spacing.
   *
   * @default "tight"
   */
  tracking?: "tight" | "normal" | "wide";

  /**
   * Line height.
   *
   * @default "tight"
   */
  leading?: "none" | "tight" | "snug" | "normal";

  /**
   * Enable text-balance for multi-line headings.
   *
   * @default true
   */
  balance?: boolean;

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

  /**
   * The HTML element to render.
   * When omitted, the value of `size` is used.
   *
   * @default "h1"
   */
  as?: "h1" | "h2" | "h3" | "h4" | "h5" | "h6" | "div";
}
