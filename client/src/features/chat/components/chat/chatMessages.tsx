import { FC } from "react";
import MessageBubble from "./messageBubble";


const ChatMessages: FC = () => {
  return (
    <div className="flex-1 overflow-y-auto p-4 space-y-4 bg-gray-50 flex flex-col">
      <MessageBubble text="Nulla efficitur elit nunc..." type="received" />
      <MessageBubble text="massa malesuada eleifend." type="sent" />

      <div className="text-center text-xs text-gray-500">
        Rabu, 27 feb 2025
      </div>

      <MessageBubble text="sodales suscipit" type="received" />
      <MessageBubble text="massa malesuada eleifend..." type="received" />

      <div className="text-center text-xs text-gray-500">
        Rabu, 29 feb 2025
      </div>
    </div>
  );
};

export default ChatMessages;
