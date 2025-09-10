import React from "react";

export interface GroupSidebarItemProps {
    nameGroup: string;
    description: string;
    ageLimit: number;
    rule: string;
    tags: string;
    online: number;
}

export const GroupSidebarItem: React.FC<GroupSidebarItemProps> = ({
    nameGroup,
    description,
    online,
}) => {
    return (
        <div className="w-full p-3 border-b cursor-pointer hover:bg-gray-50">

            <div className="flex justify-between items-center">
                <h3 className="font-semibold text-gray-800 truncate max-w-[180px]">
                    {nameGroup}
                </h3>
                <span className="text-xs text-green-600 font-medium">
                    {online} online
                </span>
            </div>


            <p className="text-sm text-gray-600 mt-1 truncate">
                {description}
            </p>
        </div>
    );
};
