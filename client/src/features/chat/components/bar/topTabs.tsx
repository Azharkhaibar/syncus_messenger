import React, { useState } from "react";
import { MessageCircle, Users, Bot } from "lucide-react";

export type topTabsType = "chat" | "groups" | "ai";

export interface tabsMenuReference {
    activeTabs: topTabsType;
    setActiveTabs: React.Dispatch<React.SetStateAction<topTabsType>>;
}

const tabs: { id: topTabsType; label: string; icon: React.ElementType }[] = [
    { id: "chat", label: "Chat", icon: MessageCircle },
    { id: "groups", label: "Groups", icon: Users },
    { id: "ai", label: "AI", icon: Bot },
];

const TopTabs: React.FC<tabsMenuReference> = ({ activeTabs, setActiveTabs }) => {

    return (
        <div className="flex items-center justify-around border-b bg-white">
            {tabs.map((tab) => {
                const Icon = tab.icon;
                return (
                    <button
                        key={tab.id}
                        onClick={() => setActiveTabs(tab.id)}
                        className={`flex items-center gap-1 py-3 px-2 text-sm font-medium ${activeTabs === tab.id
                            ? "border-b-2 border-blue-600 text-blue-600"
                            : "text-gray-600 hover:text-blue-600"
                            }`}
                    >
                        <Icon size={16} />
                        {tab.label}
                    </button>
                );
            })}
        </div>
    );
};

export default TopTabs;
