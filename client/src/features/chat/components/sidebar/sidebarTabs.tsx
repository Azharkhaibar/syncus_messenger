import { useState } from "react";
import { Users, Heart, Search, User, Star } from "lucide-react";

const tabs = [
    { id: "online", label: "Online", icon: Users },
    { id: "friend", label: "Friend", icon: User },
    { id: "gender", label: "Gender", icon: Heart },
    { id: "favorite", label: "Favorite", icon: Star },
    { id: "search", label: "Search", icon: Search },
];

const SidebarTabs = () => {
    const [activeTab, setActiveTab] = useState("online");

    return (
        <div className="flex items-center justify-between px-2 border-b bg-white">
            {tabs.map((tab) => {
                const Icon = tab.icon;
                return (
                    <button
                        key={tab.id}
                        onClick={() => setActiveTab(tab.id)}
                        className={`flex flex-col items-center flex-1 py-2 text-xs ${activeTab === tab.id ? "text-blue-600 font-semibold" : "text-gray-500"
                            }`}
                    >
                        <Icon size={16} className="mb-1" />
                        {tab.label}
                    </button>
                );
            })}
        </div>
    );
};

export default SidebarTabs;
