import React from "react";
import ProfileIdentityFormDialog from "../components/profileIdentityFormDialog";
import { NavbarHomePage } from "../components/HomePageNavbar";

export const SyncusHomePage: React.FC = () => {
    return (
        <div>
            <NavbarHomePage />
            <div>
                <div className="relative w-full h-[450px] flex items-center justify-center bg-gray-400">
                    <svg className="absolute bottom-0 left-0 w-full" viewBox="0 0 1440 320">
                        <path fill="#FFFFFF" fillOpacity="1" d="M0,256L60,250.7C120,245,240,235,360,229.3C480,224,600,224,720,229.3C840,235,960,245,1080,245.3C1200,245,1320,235,1380,229.3L1440,224L1440,320L1380,320C1320,320,1200,320,1080,320C960,320,840,320,720,320C600,320,480,320,360,320C240,320,120,320,60,320L0,320Z"></path>
                    </svg>
                </div>

                <div className="absolute top-[250px] left-1/2 transform -translate-x-1/2">
                    <ProfileIdentityFormDialog />
                </div>
            </div>
        </div>
    )
}