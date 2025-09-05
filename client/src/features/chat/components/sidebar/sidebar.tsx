import { useState } from "react";
import { users } from "../../data/userdummy";
import SidebarItem from "./sidebarItem";
import SidebarTabs from "./sidebarTabs";
import TopTabs from "./topTabs";
import ResizeHandle from "../../function/resizeHandlerSidebar";

const Sidebar = () => {
  const [width, setWidth] = useState(288); // default w-72

  return (
    <aside
      className="h-full border-r flex flex-col bg-white relative"
      style={{ width: `${width}px` }}
    >
      <TopTabs />
      <SidebarTabs />
      <div className="p-2">
        <input
          type="text"
          placeholder="Search people"
          className="w-full p-2 rounded border text-sm"
        />
      </div>
      <div className="flex-1 overflow-y-auto">
        {users.map((user) => (
          <SidebarItem key={user.id} {...user} />
        ))}
      </div>

      {/* 🔹 Modular Resize */}
      <ResizeHandle onResize={setWidth} />
    </aside>
  );
};

export default Sidebar;
