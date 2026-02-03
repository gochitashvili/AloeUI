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

const Heading = React.forwardRef<
  HTMLHeadingElement,
  React.ComponentPropsWithoutRef<"h1"> &
    VariantProps<typeof headingVariants> & { asChild?: boolean }
>(
  (
    {
      className,
      size = "h1",
      weight,
      muted,
      tracking,
      leading,
      balance,
      truncate,
      asChild = false,
      ...props
    },
    ref,
  ) => {
    const Comp = asChild ? Slot : (size ?? "h1");

    return (
      <Comp
        data-slot="heading"
        ref={ref}
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
        {...props}
      />
    );
  },
);

Heading.displayName = "Heading";

export { Heading, headingVariants };
