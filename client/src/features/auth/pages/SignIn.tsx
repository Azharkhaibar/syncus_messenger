import { NavbarHomePage } from "@/features/homepage/components/HomePageNavbar"
import SignInForm from "../components/SignInForm"
import { BackPreviousAuth } from "@/shared/components/goPrevious/back"
import HomepageFooter from "@/features/homepage/components/HomepageFooter"

export const SignInPage = () => {
    return (
        <div className="w-full h-screen">
            <NavbarHomePage />
            <BackPreviousAuth />
            <div className="flex px-[50px] gap-4">
                <div className="w-1/2">
                <h2 className="text-4xl font-semibold mt-10">Login</h2>
                <p className="mt-3 text-gray-400">Chatib is a free chat room website where you can have live chat with single women and men, you can discuss with random strangers</p>
                <SignInForm />
                </div>
                <div className="w-[75%] mt-5 px-[20px] rounded-xl h-[85vh] my-auto mx-[-0px] bg-gray-400">
                    <h4>testing</h4>
                </div>
            </div>
            <HomepageFooter />
        </div>
    )
}