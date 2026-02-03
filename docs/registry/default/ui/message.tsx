import { Slot } from "@radix-ui/react-slot";
import { cva, type VariantProps } from "class-variance-authority";
import * as React from "react";

import { buttonVariants } from "@/components/ui/button";
import { cn } from "@/lib/utils";

interface MessageContextValue {
  variant: "user" | "ai";
  align: "start" | "center" | "end";
  streaming: boolean;
}

const MessageContext = React.createContext<MessageContextValue>({
  variant: "user",
  align: "start",
  streaming: false,
});

const aiStreamingClasses = cn(
  "bg-transparent",
  "data-[variant=ai]:p-1.5",
  "data-[variant=ai][data-streaming=true]:relative",
  "data-[variant=ai][data-streaming=true]:overflow-hidden",
  "data-[variant=ai][data-streaming=true]:[mask-image:linear-gradient(to_right,black_calc(100%-1.5em),transparent)]",
  "data-[variant=ai][data-streaming=true]:[mask-size:100%_100%]",
  "data-[variant=ai][data-streaming=true]:[mask-repeat:no-repeat]",
  "data-[variant=ai][data-streaming=true]:[mask-position:0_0]",
  "data-[variant=ai][data-streaming=true]:before:absolute",
  "data-[variant=ai][data-streaming=true]:before:inset-0",
  "data-[variant=ai][data-streaming=true]:before:-z-10",
  "data-[variant=ai][data-streaming=true]:before:content-['']",
  "data-[variant=ai][data-streaming=true]:before:animate-streaming-shimmer",
  "data-[variant=ai][data-streaming=true]:before:bg-[length:200%_100%]",
  "data-[variant=ai][data-streaming=true]:before:bg-[linear-gradient(90deg,transparent_0%,var(--accent)_30%,var(--muted)_50%,var(--accent)_70%,transparent_100%)]",
  "data-[variant=ai][data-streaming=true]:before:opacity-50",
);

const messageContentVariants = cva("flex p-3 text-start", {
  variants: {
    variant: {
      user: "rounded-md bg-muted",
      ai: aiStreamingClasses,
    },
  },
  defaultVariants: {
    variant: "user",
  },
});

const messageActionsVariants = cva("flex items-center gap-1", {
  variants: {
    variant: {
      default: "",
      hover: "opacity-0 transition-opacity group-hover:opacity-100",
    },
    align: {
      start: "",
      center: "self-end",
      end: "",
    },
  },
  defaultVariants: {
    variant: "default",
    align: "start",
  },
});

function Message({
  className,
  variant = "user",
  align = "start",
  streaming = false,
  ...props
}: React.ComponentProps<"div"> & {
  variant?: "user" | "ai";
  align?: "start" | "center" | "end";
  streaming?: boolean;
}) {
  return (
    <MessageContext.Provider value={{ variant, align, streaming }}>
      <div
        data-slot="message"
        data-variant={variant}
        data-align={align}
        data-streaming={streaming}
        className={cn(
          "group flex flex-col gap-2",
          variant === "ai" && "gap-1",
          align === "start" && "items-start",
          align === "end" && "items-end",
          align === "center" && "items-center self-center",
          className,
        )}
        {...props}
      />
    </MessageContext.Provider>
  );
}

function MessageContent({
  className,
  children,
  ...props
}: React.ComponentProps<"div">) {
  const { variant, align, streaming } = React.useContext(MessageContext);

  return (
    <div
      data-slot="message-content"
      data-variant={variant}
      data-align={align}
      data-streaming={streaming}
      className={cn(messageContentVariants({ variant }), className)}
      {...props}
    >
      {children}
    </div>
  );
}

function MessageActions({
  className,
  variant = "default",
  ...props
}: React.ComponentProps<"div"> &
  Pick<VariantProps<typeof messageActionsVariants>, "variant">) {
  const { variant: messageVariant, align } = React.useContext(MessageContext);

  return (
    <div
      data-slot="message-actions"
      data-variant={messageVariant}
      data-align={align}
      data-actions-variant={variant}
      className={cn(messageActionsVariants({ variant, align }), className)}
      {...props}
    />
  );
}

function MessageAction({
  className,
  variant: buttonVariant = "ghost",
  size = "icon-sm",
  asChild = false,
  ...props
}: React.ComponentProps<"button"> &
  VariantProps<typeof buttonVariants> & { asChild?: boolean }) {
  const Comp = asChild ? Slot : "button";
  const { variant, align } = React.useContext(MessageContext);

  return (
    <Comp
      data-slot="message-action"
      data-variant={variant}
      data-align={align}
      {...(!asChild && { type: "button" })}
      className={cn(
        buttonVariants({ variant: buttonVariant, size, className }),
      )}
      {...props}
    />
  );
}

export { Message, MessageAction, MessageActions, MessageContent };
