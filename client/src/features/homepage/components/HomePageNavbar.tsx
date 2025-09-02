import React from "react";
import { Link } from "react-router-dom";

export const NavbarHomePage: React.FC = () => {
    return (
        <div className="w-full h-3/12 bg-blue-700 ">
            <div className="p-5 flex items-center justify-between px-12">
                <div><h2 className="text-4xl text-white font-bold">SyncUs</h2></div>
                <div className="flex space-x-6 items-center">
                    <Link to="/login" className="text-white text-[20px]">Log in</Link>
                    <Link to="/signup" className="text-white text-[20px]">Sign up</Link>
                </div>
            </div>
        </div>
    );
};
