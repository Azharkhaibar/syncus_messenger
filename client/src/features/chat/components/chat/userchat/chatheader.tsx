import { FC } from "react";
import { UserRoundPlus, Search, EllipsisVertical } from "lucide-react";

interface ChatHeaderProps {
  name: string;
  details: string;
}

const ChatHeader: FC<ChatHeaderProps> = ({ name, details }) => {
  return (
    <div className="p-4 border-b bg-black flex items-center space-x-3 justify-between">
      <div className="flex items-center">
        <img
          src="/avatar.png"
          alt={name}
          className="w-10 h-10 rounded-full object-cover"
        />
        <div>
          <h3 className="font-semibold text-white">{name}</h3>
          <p className="text-sm text-gray-400">{details}</p>
        </div>
      </div>
      <div className="flex items-center space-x-5">
        <UserRoundPlus size={26} className="text-white" />
        <Search size={26} className="text-white" />
        <EllipsisVertical size={26} className="text-white" />
      </div>
    </div>
  );
};

export default ChatHeader;
