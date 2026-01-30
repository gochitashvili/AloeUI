import { Slot } from "@radix-ui/react-slot";
import { cva, type VariantProps } from "class-variance-authority";
import * as React from "react";

import { cn } from "@/lib/utils";

const messageVariants = cva(
  "group w-fit max-w-xl text-balance rounded border border-muted bg-muted p-2",
  {
    variants: {
      variant: {
        user: "",
        ai: "border-transparent bg-transparent",
      },
      size: {
        default: "text-base",
        sm: "text-sm",
        lg: "text-md",
      },
      state: {
        default: "",
        loading: "animate-pulse cursor-wait",
        error:
          "border border-red-100 bg-red-50/50 text-red-400 dark:border-red-900 dark:bg-red-900/20",
      },
    },
    defaultVariants: {
      variant: "user",
      size: "default",
      state: "default",
    },
  },
);

export interface MessageProps
  extends React.HTMLAttributes<HTMLDivElement>,
    VariantProps<typeof messageVariants> {
  asChild?: boolean;
}

const Message = React.forwardRef<HTMLDivElement, MessageProps>(
  ({ className, variant, size, state, asChild = false, ...props }, ref) => {
    const Comp = asChild ? Slot : "div";

    return (
      <Comp
        data-slot="message"
        data-variant={variant}
        data-size={size}
        data-state={state}
        className={cn(messageVariants({ variant, size, state, className }))}
        ref={ref}
        {...props}
      />
    );
  },
);

Message.displayName = "Message";

export { Message, messageVariants };
