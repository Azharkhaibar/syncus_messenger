import { FC } from "react";

export interface MessageBubbleProps {
  text: string;
  type?: "received" | "sent";
  time?: string;
}

const MessageBubble: FC<MessageBubbleProps> = ({ text, type, time }) => {
  return (
    <div
      className={`flex ${type === "sent" ? "justify-end" : "justify-start"}`}
    >
      <div
        className={`rounded-lg px-4 py-2 max-w-xs ${type === "sent" ? "bg-blue-500 text-white" : "bg-gray-200 text-gray-800"
          }`}
      >
        <p>{text}</p>
        {time && (
          <span className="text-xs text-gray-500 block mt-1 text-right">
            {time}
          </span>
        )}
      </div>
    </div>
  );
};

export default MessageBubble;
