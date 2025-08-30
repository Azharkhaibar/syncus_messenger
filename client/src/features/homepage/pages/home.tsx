import React from "react";
import ProfileIdentityFormDialog from "../components/profileIdentityFormDialog";
import { NavbarHomePage } from "../components/HomePageNavbar";
import { HomePageBenefitFeatures, HomePageFeatureList } from "../assets/homepageIconAssets";

export const SyncusHomePage: React.FC = () => {
    return (
        <div className="">
            <NavbarHomePage />
            <div className="h-[200vh]">
                <div className="relative w-full h-[450px] flex items-center justify-center bg-gray-400">
                    <svg className="absolute bottom-0 left-0 w-full" viewBox="0 0 1440 320">
                        <path fill="#FFFFFF" fillOpacity="1" d="M0,256L60,250.7C120,245,240,235,360,229.3C480,224,600,224,720,229.3C840,235,960,245,1080,245.3C1200,245,1320,235,1380,229.3L1440,224L1440,320L1380,320C1320,320,1200,320,1080,320C960,320,840,320,720,320C600,320,480,320,360,320C240,320,120,320,60,320L0,320Z"></path>
                    </svg>
                </div>

                <div className="absolute top-[250px] left-1/2 transform -translate-x-1/2">
                    <ProfileIdentityFormDialog />
                </div>

                <div className="text-center mt-36 w-[80%] justify-center m-auto font-medium">
                    <h3><span className="text-3xl text-blue-800 font-semibold">SyncUs</span> is a modern web chat platform where anyone can connect instantly — no sign-up, no barriers. Join public or private group chats, enjoy voice and video calls, and share images in real time. Whether you're chatting with close friends or meeting new people from around the world, SyncUs gives you a secure, user-friendly space to stay connected.</h3>
                    <p className="mt-4">Block users when needed, stay anonymous if you want, and jump right into conversations — it's chatting, your way.</p>
                </div>

                {/* Section Benefit (3 bulat) */}
                <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-12 mt-28 text-center">
                    {HomePageBenefitFeatures.map((ftr, index) => {
                        const Icon = ftr.icon;
                        return (
                            <div key={index} className="flex flex-col items-center">
                                <div className="w-28 h-28 flex items-center justify-center rounded-full bg-blue-600 mb-6 shadow-md">
                                    <Icon size={48} strokeWidth={2} className="text-white" />
                                </div>
                                <h3 className="text-xl font-semibold">{ftr.title}</h3>
                                <p className="text-sm text-gray-600 mt-2 max-w-xs">{ftr.description}</p>
                            </div>
                        );
                    })}
                </div>

                {/* Section Feature (6 card kotak) */}
                <div className="max-w-[1350px] mx-auto grid grid-cols-1 md:grid-cols-3 gap-8 mt-20">
                    {HomePageFeatureList.map((ftr, index) => {
                        const Icon = ftr.icon;
                        return (
                            <div
                                key={index}
                                className="bg-white p-6 rounded-xl shadow-md hover:shadow-lg transition text-left"
                            >
                                <div className="flex items-center space-x-3 mb-3">
                                    <div className="w-10 h-10 flex items-center justify-center rounded-md bg-blue-600">
                                        <Icon size={20} className="text-white" />
                                    </div>
                                    <h3 className="text-lg font-semibold text-blue-700">{ftr.title}</h3>
                                </div>
                                <p className="text-sm text-gray-600">{ftr.description}</p>
                            </div>
                        );
                    })}
                </div>

            </div>
        </div>
    )
}