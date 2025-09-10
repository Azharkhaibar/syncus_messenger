import { FC, useState } from "react";
import Topbar from "../components/bar/topBar";
import Sidebar from "../components/sidebar/sidebar";
import MiniSidebar from "../components/minisidebar/minisidebar";
import ChatHeader from "../components/chat/userchat/chatheader";
import ChatMessages from "../components/chat/userchat/chatMessages";
import ChatInput from "../components/chat/userchat/chatInput";
import { GroupLobby } from "../components/chat/groupchat/grouplobby";
import { topTabsType } from "../components/bar/topTabs";

const ChatLayout: FC = () => {
  const [activeSidebarTabs, setActiveSidebarTabs] = useState<topTabsType>("chat");

  return (
    <div className="flex flex-col h-screen">
      <Topbar setActiveTopBarTabs={setActiveSidebarTabs}  />

      {/* Main area */}
      <div className="flex flex-1 overflow-hidden">
        <MiniSidebar />

        {/* Sidebar utama */}
        <Sidebar
          activeTabs={activeSidebarTabs}
          setActiveTabs={setActiveSidebarTabs} 
        />

        <main className="flex-1 flex flex-col h-full">
          {activeSidebarTabs === "chat" && (
            <>
              <ChatHeader
                name="Azhar Khaibar"
                details="Male, 17 years, Indonesia"
              />
              <div className="flex-1 overflow-y-auto">
                <ChatMessages />
              </div>
              <ChatInput />
            </>
          )}

          {activeSidebarTabs === "groups" && <GroupLobby />}

          {activeSidebarTabs === "ai" && (
            <div className="flex items-center justify-center flex-1 text-gray-500">
              AI Assistant will be here 🤖
            </div>
          )}
        </main>
      </div>
    </div>
  );
};

export default ChatLayout;
