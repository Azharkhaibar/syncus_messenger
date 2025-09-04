import { NavbarHomePage } from "@/features/homepage/components/HomePageNavbar";
import SignInForm from "../components/SignUpForm";
import HomepageFooter from "@/features/homepage/components/HomepageFooter";
import { BackPreviousAuth } from "@/shared/components/goPrevious/back";

export const SignUpPage = () => {
    return (
        <div className="w-full h-screen">
            <NavbarHomePage />
            <BackPreviousAuth />
            <div className="px-[50px] flex gap-4">
                <div className="w-1/2">
                    <h1 className="text-4xl font-semibold mt-10">Free Register</h1>
                    <p className="mt-3 text-gray-400">When you register, you will able to add friends, uploads yout profile and many more</p>
                    <SignInForm />
                </div>
                <div className="w-[75%] mt-5 px-[20px] rounded-xl h-[85vh] my-auto mx-[-0px] bg-gray-400">
                    <h4>testing</h4>
                </div>
            </div>
            <HomepageFooter />
        </div>
    );
}

