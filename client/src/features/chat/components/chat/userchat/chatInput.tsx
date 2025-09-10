import { FC } from "react";
import { Paperclip, Smile, Camera, Send } from "lucide-react";

const ChatInput: FC = () => {
  return (
    <div className="p-3 border-t flex items-center space-x-2 gap-3">
      <div className="flex space-x-6">
        <Paperclip size={30} className="text-black" />
        <Smile size={30} className="text-black" />
        <Camera size={30} className="text-black" />
      </div>
      <input
        type="text"
        placeholder="Type a message"
        className="flex-1 p-2 bg-gray-200 rounded-full"
      />
      <button className="flex items-center gap-2 px-6 py-2 rounded-lg bg-black text-white hover:bg-gray-800">
        <span>Send</span>
        <Send size={18} />
      </button>
    </div>
  );
};

export default ChatInput;
