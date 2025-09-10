import React from "react";
import { Search, Filter } from "lucide-react";
import { groupsDummy } from "@/features/chat/data/groupdummy";
export const GroupLobby: React.FC = () => {
    return (
        <div className="w-[800px] py-6 px-6 mx-auto">
            <div className="flex items-center gap-2 border rounded-lg px-3 py-2 mb-4">
                <Search className="w-4 h-4 text-gray-500" />
                <input
                    type="text"
                    placeholder="search new rooms"
                    className="w-full outline-none text-sm bg-transparent"
                />
            </div>
            <div className="border rounded-xl p-4 mb-6 bg-gray-50">
                <h3 className="text-2xl font-semibold text-gray-900">Create your group</h3>
                <p className="text-sm text-gray-500 mt-2">
                    Give a home to your ideas. Invite friends & hold discussions.
                </p>
                <button className="text-sm bg-blue-500 text-white mt-2 py-2 px-4 rounded-full">create group</button>
            </div>
            <div className="flex items-center justify-between mb-2">
                <h4 className="text-sm font-medium text-gray-500">All groups</h4>
                <Filter className="w-4 h-4 text-gray-500 cursor-pointer" />
            </div>
            <div className="space-y-3">
                {groupsDummy.map((g) => (
                    <div
                        key={g.id}
                        className="flex justify-between items-center border rounded-lg p-4 hover:bg-gray-50 transition"
                    >
                        <div>
                            <h3 className="font-semibold text-xl text-gray-900">{g.nameGroup}</h3>
                            <p className="text-sm text-gray-500 truncate max-w-xs">{g.description}</p>
                            <span className="text-gray-600 bg-gray-100 rounded-full px-2 py-0.5 inline-block text-sm mt-2">
                                {g.tags}
                            </span>
                        </div>
                        <div className="flex flex-col items-end">
                            <div className="flex items-center text-sm text-gray-500">
                                <span className="w-2 h-2 bg-green-500 rounded-full mr-2"></span>
                                {g.online}
                            </div>
                            <button className="text-sm text-white mt-2 py-2  px-4 rounded-full bg-blue-500">Join chat</button>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};
