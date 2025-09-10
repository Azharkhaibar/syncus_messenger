import { FC } from "react";
import MessageBubble from "./messageBubble";
import { messages } from "../../../data/messagedummy";

const ChatMessages: FC = () => {
  return (
    <div className="flex-1 overflow-y-auto p-4 space-y-4 bg-gray-50 flex flex-col">
      {messages.map((msg) =>
        msg.text ? (
          <MessageBubble
            key={msg.id}
            text={msg.text}
            type={msg.type}   // aman sekarang
            time={msg.time}
          />
        ) : (
          <div key={msg.id} className="text-center text-xs text-gray-500">
            {msg.date}
          </div>
        )
      )}
    </div>
  );
};

export default ChatMessages;
