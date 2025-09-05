import { FC } from "react";

interface MessageBubbleProps {
  text: string;
  type?: "sent" | "received";
}

const MessageBubble: FC<MessageBubbleProps> = ({ text, type = "received" }) => {
  return (
    <div
      className={`max-w-xs p-2 rounded ${
        type === "sent"
          ? "self-end bg-blue-500 text-white"
          : "self-start bg-gray-200"
      }`}
    >
      {text}
    </div>
  );
};

export default MessageBubble;
