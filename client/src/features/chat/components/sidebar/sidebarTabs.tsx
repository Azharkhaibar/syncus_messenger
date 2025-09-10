import { useState } from "react";
import { Users, Heart, Search, User, Star } from "lucide-react";

const tabs = [
    { id: "online", label: "Online", icon: Users },
    { id: "friend", label: "Friend", icon: User },
    { id: "gender", label: "Gender", icon: Heart },
    { id: "favorite", label: "Favorite", icon: Star },
    { id: "search", label: "Search", icon: Search },
];

const SidebarTabs = ({ compact = false }: { compact?: boolean }) => {
    const [activeTab, setActiveTab] = useState("online");

    return (
        <div className="flex items-center justify-between px-2 border-b border-gray-300 bg-white">
            {tabs.map((tab) => {
                const Icon = tab.icon;
                return (
                    <button
                        key={tab.id}
                        onClick={() => setActiveTab(tab.id)}
                        className={`flex ${compact ? "flex-col" : "flex-row gap-1"
                            } items-center flex-1 py-2 text-xs transition-colors ${activeTab === tab.id
                                ? "text-blue-600 font-semibold"
                                : "text-gray-500 hover:text-blue-600"
                            }`}
                    >
                        <Icon size={18} className={compact ? "mb-1" : ""} />
                        {!compact && <span>{tab.label}</span>}
                    </button>
                );
            })}
        </div>
    );
};

export default SidebarTabs;
