import { FC } from "react";

interface ChatHeaderProps {
  name: string;
  details: string;
}

const ChatHeader: FC<ChatHeaderProps> = ({ name, details }) => {
  return (
    <div className="p-4 border-b">
      <h3 className="font-semibold">{name}</h3>
      <p className="text-sm text-gray-500">{details}</p>
    </div>
  );
};

export default ChatHeader;
