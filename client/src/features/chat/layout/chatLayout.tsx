import { FC } from "react";
import Topbar from "../components/bar/topBar";
import Sidebar from "../components/sidebar/sidebar";
import ChatHeader from "../components/chat/chatheader";
import ChatMessages from "../components/chat/chatMessages";
import ChatInput from "../components/chat/chatInput";

const ChatLayout: FC = () => {
    return (
        <div className="flex flex-col h-screen">
            {/* Topbar */}
            <Topbar />

            {/* Main area */}
            <div className="flex flex-1">
                <Sidebar />

                <main className="flex-1 flex flex-col">
                    <ChatHeader
                        name="Azhar Khaibar"
                        details="Male, 17 years, Indonesia"
                    />
                    <ChatMessages />
                    <ChatInput />
                </main>
            </div>
        </div>
    );
};

export default ChatLayout;
