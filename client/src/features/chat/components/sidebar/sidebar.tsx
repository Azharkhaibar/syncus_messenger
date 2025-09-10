import React, { useState } from "react";
import { users } from "../../data/userdummy";
import SidebarItem from "./sidebarItem";
import SidebarTabs from "./sidebarTabs";
import TopTabs from "../bar/topTabs";
import ResizeHandle from "../../function/resizeHandlerSidebar";
import { groupsDummy } from "../../data/groupdummy";
import { GroupSidebarItem } from "../groupsidebar/groupsidebaritem";

export interface sidebarItemTabsProps {
  activeTabs: "chat" | "groups" | "ai";
  setActiveTabs: (tab: "chat" | "groups" | "ai") => void;
}

const Sidebar: React.FC<sidebarItemTabsProps> = ({ activeTabs, setActiveTabs }) => {
  const [width, setWidth] = useState(320);
  const compact = width < 260;

  return (
    <aside
      className="h-screen flex flex-col min-h-0 border-r bg-white relative"
      style={{ width: `${width}px` }}
    >
      <TopTabs activeTabs={activeTabs} setActiveTabs={setActiveTabs} />
      <SidebarTabs compact={compact} />

      {!compact && (
        <div className="p-2">
          <input type="text"
            placeholder={activeTabs === "groups" ? "Search group" : "search people"}
            className="w-full p-2 rounded-full border text-sm focus:ring focus:ring-blue-200 outline-none"
          />
        </div>
      )}

      <div className="flex-1 min-h-0 overflow-y-auto scrollbar-thin scrollbar-thumb-gray-300 scrollbar-track-gray-100">
        {activeTabs === "chat" && users.map((usr) => (
          <SidebarItem key={usr.id} {...usr} compact={compact} />
        ))}
        {activeTabs === "groups" && groupsDummy.map((grp) => (
          <GroupSidebarItem key={grp.id} {...grp}  />
        ))}

        {activeTabs === "ai" && (
          <div className="p-4 text-sm text-gray-500">AI Assistant coming soon 🤖</div>
        )}
      </div>

      <ResizeHandle onResize={setWidth} />
    </aside>
  );
};

export default Sidebar;
