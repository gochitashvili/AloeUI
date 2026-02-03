import { Slot } from "@radix-ui/react-slot";
import { cva, type VariantProps } from "class-variance-authority";
import * as React from "react";

import { cn } from "@/lib/utils";

const headingVariants = cva("", {
  variants: {
    size: {
      h1: "text-4xl md:text-5xl lg:text-6xl",
      h2: "text-3xl md:text-4xl lg:text-5xl",
      h3: "text-2xl md:text-3xl lg:text-4xl",
      h4: "text-xl md:text-2xl lg:text-3xl",
      h5: "text-lg md:text-xl lg:text-2xl",
      h6: "text-base md:text-lg lg:text-xl",
    },
    weight: {
      normal: "font-normal",
      medium: "font-medium",
      semibold: "font-semibold",
      bold: "font-bold",
    },
    muted: {
      false: "text-foreground",
      true: "text-muted-foreground",
    },
    tracking: {
      tight: "tracking-tight",
      normal: "tracking-normal",
      wide: "tracking-wide",
    },
    leading: {
      none: "leading-none",
      tight: "leading-tight",
      snug: "leading-snug",
      normal: "leading-normal",
    },
    balance: {
      true: "text-balance",
      false: "",
    },
    truncate: {
      true: "truncate",
      false: "",
    },
  },
  defaultVariants: {
    size: "h1",
    weight: "bold",
    muted: false,
    tracking: "tight",
    leading: "tight",
    balance: true,
    truncate: false,
  },
});

export type HeadingAsElement = "h1" | "h2" | "h3" | "h4" | "h5" | "h6" | "div";

/** Extracts ref type for the polymorphic element */
type PolymorphicRef<C extends React.ElementType> =
  React.ComponentPropsWithRef<C>["ref"];

/** Props that change based on `as` – element-specific attributes and ref */
type PolymorphicComponentPropsWithRef<
  C extends HeadingAsElement,
  Props extends object,
> = Omit<React.ComponentPropsWithoutRef<C>, keyof Props> &
  Props & { as?: C } & { ref?: PolymorphicRef<C> };

interface HeadingPropsBase extends VariantProps<typeof headingVariants> {
  asChild?: boolean;
  as?: HeadingAsElement;
}

export type HeadingProps<C extends HeadingAsElement = "h1"> =
  PolymorphicComponentPropsWithRef<C, HeadingPropsBase>;

type HeadingComponent = (<C extends HeadingAsElement = "h1">(
  props: HeadingProps<C>,
) => React.ReactElement | null) & {
  displayName?: string;
};

const Heading = React.forwardRef(
  <C extends HeadingAsElement = "h1">(
    {
      className,
      size,
      weight,
      muted,
      tracking,
      leading,
      balance,
      truncate,
      asChild = false,
      as,
      ...props
    }: HeadingProps<C>,
    ref: PolymorphicRef<C>,
  ) => {
    const Comp = asChild ? Slot : (as ?? size ?? "h1");

    return (
      <Comp
        className={cn(
          headingVariants({
            size,
            weight,
            muted,
            tracking,
            leading,
            balance,
            truncate,
            className,
          }),
        )}
        ref={ref}
        {...props}
      />
    );
  },
) as HeadingComponent;

Heading.displayName = "Heading";

export { Heading, headingVariants };
