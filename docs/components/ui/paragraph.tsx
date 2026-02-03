import { Slot } from "@radix-ui/react-slot";
import { cva, type VariantProps } from "class-variance-authority";
import * as React from "react";

import { cn } from "@/lib/utils";

const paragraphVariants = cva("", {
  variants: {
    size: {
      xs: "text-xs",
      sm: "text-sm",
      base: "text-base",
      lg: "text-lg",
      xl: "text-xl",
      "2xl": "text-2xl",
      "3xl": "text-3xl",
    },
    weight: {
      normal: "font-normal",
      medium: "font-medium",
      semibold: "font-semibold",
    },
    muted: {
      false: "text-foreground",
      true: "text-muted-foreground",
    },
    leading: {
      snug: "leading-snug",
      normal: "leading-normal",
      relaxed: "leading-relaxed",
    },
    truncate: {
      true: "truncate",
      false: "",
    },
  },
  defaultVariants: {
    size: "base",
    weight: "normal",
    muted: false,
    leading: "normal",
    truncate: false,
  },
});

const Paragraph = React.forwardRef<
  HTMLParagraphElement,
  React.ComponentPropsWithoutRef<"p"> &
    VariantProps<typeof paragraphVariants> & { asChild?: boolean }
>(
  (
    {
      className,
      size = "base",
      weight,
      muted,
      leading,
      truncate,
      asChild = false,
      ...props
    },
    ref,
  ) => {
    const Comp = asChild ? Slot : "p";

    return (
      <Comp
        data-slot="paragraph"
        ref={ref}
        className={cn(
          paragraphVariants({
            size,
            weight,
            muted,
            leading,
            truncate,
            className,
          }),
        )}
        {...props}
      />
    );
  },
);

Paragraph.displayName = "Paragraph";

export { Paragraph, paragraphVariants };
