import GenderToggleHomePageDialog, { Gender } from "@/shared/components/genderToggle/genderToggleHomePageDialog";
import { ChevronDown } from "lucide-react";
import React from "react";
import CountriesApiServices from "../services/countryApiServices";

const ProfileIdentityFormDialog: React.FC = () => {
    const [gender, setGender] = React.useState<Gender>("male")
    const { countriesApi } = CountriesApiServices()
    const ages = Array.from({ length: 100 }, (_, i) => i + 1)
    return (
        <div className="h-auto bg-gray-50 w-[550px] rounded-xl m-auto shadow-xl">
            <div className="p-4">
                <h2 className="text-center text-3xl font-semibold">Chat Now!</h2>
                {/* form masuk */}
                <div>
                    <form className="flex flex-col space-y-4 mt-6">
                        <input className="border border-gray-300 p-2 rounded-md" placeholder="Username..." />
                        <div>
                            <GenderToggleHomePageDialog genderForm={gender} setGenderForm={setGender} />
                        </div>
                        <div className="flex items-center gap-2">
                            <div className="relative w-full">
                                <select className="appearance-none border border-gray-300 px-3 py-2 rounded-md w-full pr-8 text-sm focus:outline-none focus:ring-2 focus:ring-blue-400">
                                    <option value="">Age</option>
                                    {ages.map((age) => (
                                        <option key={age} value={age}>
                                            {age}
                                        </option>
                                    ))}
                                </select>
                                <ChevronDown className="absolute right-2 top-1/2 -translate-y-1/2 pointer-events-none text-gray-500 w-4 h-4" />
                            </div>
                            <div className="relative w-full">
                                <select className="appearance-none border border-gray-300 px-3 py-2 rounded-md w-full pr-8 text-sm focus:outline-none focus:ring-2 focus:ring-blue-400">
                                    <option value="">{countriesApi.length === 0 ? "Loading..." : "Country"}</option>
                                    {countriesApi.map((c) => (
                                        <option key={c} value={c}>
                                            {c}
                                        </option>
                                    ))}
                                </select>
                                <ChevronDown className="absolute right-2 top-1/2 -translate-y-1/2 pointer-events-none text-gray-500 w-4 h-4" />
                            </div>
                        </div>
                    </form>
                </div>
                <div>
                    <button className="w-full bg-blue-700 text-white py-2 text-lg font-semibold mt-4 rounded-md transition-colors hover:bg-blue-800">
                        Go to chat
                    </button>
                </div>
            </div>
        </div>
    );
};

export default ProfileIdentityFormDialog;
