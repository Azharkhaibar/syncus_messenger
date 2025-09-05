const Topbar = () => {
  return (
    <div className="flex items-center justify-between bg-blue-600 text-white px-6 py-4">
      <div className="flex space-x-6">
        <h2 className="text-4xl font-semibold">SyncUs</h2>
      </div>
      <div className="flex space-x-6 text-sm">
        <span className="cursor-pointer">Group chats</span>
        <span className="cursor-pointer">Notification</span>
        <span className="cursor-pointer">Profile</span>
      </div>
    </div>
  );
};

export default Topbar;
