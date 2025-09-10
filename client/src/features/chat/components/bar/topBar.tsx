import { MessageSquare, Bell, UserCog } from "lucide-react";
import React, { useState } from "react";
export interface topBarProps {
  setActiveTopBarTabs: (tab: "chat" | "groups" | "ai") => void;
}
const Topbar: React.FC<topBarProps> = ({ setActiveTopBarTabs }) => {
  return (
    <div className="flex items-center justify-between 
      bg-gradient-to-r from-blue-500 via-blue-600 to-indigo-600 
      text-white px-8 py-4 shadow-md relative z-10">
      <div className="flex items-center space-x-2 ml-20">
        <h2 className="text-3xl font-extrabold tracking-wide drop-shadow-md">
          SyncUs
        </h2>
      </div>

      <div className="flex items-center space-x-10">
        <div className="flex items-center gap-2 cursor-pointer 
          hover:text-blue-200 transition duration-300 hover:scale-105"
          onClick={() => setActiveTopBarTabs("groups")}>
          <MessageSquare size={22} className="drop-shadow-md" />
          <span className="text-base font-medium">Group Chats</span>
        </div>

        <div className="flex items-center gap-2 cursor-pointer 
          hover:text-blue-200 transition duration-300 hover:scale-105">
          <Bell size={22} className="drop-shadow-md" />
          <span className="text-base font-medium">Notification</span>
        </div>

        <div className="flex items-center gap-2 cursor-pointer 
          hover:text-blue-200 transition duration-300 hover:scale-105">
          <UserCog size={22} className="drop-shadow-md" />
          <span className="text-base font-medium">Profile</span>
        </div>
      </div>
    </div>
  );
};

export default Topbar;
