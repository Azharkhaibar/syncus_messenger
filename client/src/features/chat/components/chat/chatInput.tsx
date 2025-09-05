import { FC } from "react";

const ChatInput: FC = () => {
  return (
    <div className="p-3 border-t flex items-center space-x-2">
      <input
        type="text"
        placeholder="Type a message"
        className="flex-1 p-2 border rounded"
      />
      <button className="px-4 py-2 bg-blue-600 text-white rounded">
        Send
      </button>
    </div>
  );
};

export default ChatInput;
