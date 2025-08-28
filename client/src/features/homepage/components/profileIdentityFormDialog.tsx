import GenderToggleHomePageDialog, { Gender } from "@/shared/components/genderToggle/genderToggleHomePageDialog";
import React from "react";

const ProfileIdentityFormDialog: React.FC = () => {
    const [gender, setGender] = React.useState<Gender>("male")
    return (
        <div className="h-auto bg-gray-50 w-[400px] rounded-xl m-auto shadow-xl">
            <div className="p-4">
                <h2 className="text-center text-3xl font-semibold">Chat Now!</h2>
                <div>
                    <form className="flex flex-col space-y-4 mt-6">
                        <input className="border border-gray-300 p-2 rounded-md" placeholder="Username..." />
                        <div>
                            <GenderToggleHomePageDialog genderForm={gender} setGenderForm={setGender}  />
                        </div>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default ProfileIdentityFormDialog;
