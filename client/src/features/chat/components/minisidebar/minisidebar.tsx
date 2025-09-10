import { FC, useState } from "react";
import { MessageCircle, Phone, Circle, Star, Trash, Settings } from "lucide-react";

const items = [
    { id: "chat", icon: MessageCircle },
    { id: "calls", icon: Phone },
    { id: "status", icon: Circle },
    { id: "favorite", icon: Star },
    { id: "trash", icon: Trash },
    { id: "settings", icon: Settings },
];

const MiniSidebar: FC = () => {
    const [active, setActive] = useState("chat");

    return (
        <aside className="h-screen w-14 bg-gray-950 text-gray-300 flex flex-col items-center py-4 space-y-4">
            {items.map((item) => {
                const Icon = item.icon;
                return (
                    <button
                        key={item.id}
                        onClick={() => setActive(item.id)}
                        className={`p-2 rounded-xl transition-all duration-300 
              ${active === item.id
                                ? "bg-gradient-to-br from-blue-500 to-blue-700 text-white shadow-lg shadow-blue-500/30 scale-105"
                                : "hover:bg-blue-600/20 hover:text-blue-400"
                            }`}
                    >
                        <Icon size={22} />
                    </button>
                );
            })}
        </aside>
    );
};

export default MiniSidebar;
