import type { CompositionProps, EmptyProps } from "@/types";

/**
 * Props for the `Heading` component.
 *
 * This component renders typographic headings (`h1`–`h6`) with
 * responsive sizes and optional polymorphic rendering.
 */
export interface HeadingProps extends EmptyProps<"h1">, CompositionProps {
  /**
   * Visual style of the heading.
   *
   * This controls the font size and weight while keeping
   * the underlying HTML element flexible via the `as` prop.
   *
   * @default "h1"
   */
  variant?: "h1" | "h2" | "h3" | "h4" | "h5" | "h6";

  /**
   * Whether to render the component as a child of another component
   * using `@radix-ui/react-slot`.
   *
   * When `true`, the `Heading` will not render a DOM node itself
   * but will instead pass props to its child.
   *
   * @default false
   */
  asChild?: boolean;

  /**
   * The HTML element to render.
   *
   * When `asChild` is `false`, this controls which element is rendered.
   * When omitted, the value of `variant` is used as the element name.
   *
   * @default "h1"
   */
  as?: "h1" | "h2" | "h3" | "h4" | "h5" | "h6" | "div";
}
