import { CopyIcon } from "lucide-react";
import type * as React from "react";
import {
  Message,
  MessageAction,
  MessageActions,
  MessageContent,
} from "@/registry/default/ui/message";

export default function MessageDemo(): React.ReactElement {
  return (
    <div className="flex flex-col gap-2">
      <Message variant="user" align="end">
        <MessageContent>User message</MessageContent>
        <MessageActions variant="hover">
          <MessageAction variant="ghost" size="icon-sm">
            <CopyIcon className="size-3.5" />
          </MessageAction>
        </MessageActions>
      </Message>
      <Message variant="ai" align="start">
        <MessageContent>AI response</MessageContent>
        <MessageActions variant="hover">
          <MessageAction variant="ghost" size="icon-sm">
            <CopyIcon className="size-3.5" />
          </MessageAction>
        </MessageActions>
      </Message>
      <Message variant="ai" align="start" streaming>
        <MessageContent>Streaming response…</MessageContent>
      </Message>
    </div>
  );
}
