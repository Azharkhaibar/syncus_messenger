import React from "react";

export const NavbarHomePage: React.FC = () => {
    return (
        <div className="w-full h-3/12 bg-blue-600 ">
            <div className="p-5 flex items-center justify-between px-12">
                <div><h2 className="text-4xl text-white font-bold">SyncUs</h2></div>
                <div className="flex space-x-6 items-center">
                    <h3 className="text-white text-[20px]">Log in</h3>
                    <h3 className="text-white text-[20px]">Sign up</h3>
                </div>
            </div>
        </div>
    );
};
