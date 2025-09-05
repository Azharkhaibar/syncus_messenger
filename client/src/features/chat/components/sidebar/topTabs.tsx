import { useState } from "react";

const tabs = [
    { id: "chat", label: "Chat" },
    { id: "groups", label: "Groups" },
    { id: "ai", label: "AI" },
];

const TopTabs = () => {
    const [activeTab, setActiveTab] = useState("chat");

    return (
        <div className="flex items-center justify-around border-b bg-white">
            {tabs.map((tab) => (
                <button
                    key={tab.id}
                    onClick={() => setActiveTab(tab.id)}
                    className={`flex-1 py-3 text-sm font-medium ${activeTab === tab.id
                            ? "border-b-2 border-blue-600 text-blue-600"
                            : "text-gray-600 hover:text-blue-600"
                        }`}
                >
                    {tab.label}
                </button>
            ))}
        </div>
    );
};

export default TopTabs;
