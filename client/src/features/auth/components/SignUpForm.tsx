import CountriesApiServices from "@/features/homepage/services/countryApiServices";
import GenderToggleSignupDialog, { Gender } from "@/shared/components/singupGender/genderToogleSignUp";
import React from "react";
import { Link } from "react-router-dom";
export default function SignInForm() {
    const [genderForm, setGenderForm] = React.useState<Gender>("male");
    const { countriesApi } = CountriesApiServices();
    const ages = Array.from({ length: 100 }, (_, i) => i + 1);
    const [age, setAge] = React.useState<number | "">("");
    return (
        <div>
            <form className="flex flex-col space-y-4 mt-6">
                {/* Username */}
                <input
                    type="text"
                    placeholder="Username"
                    className="border border-gray-400 rounded-lg px-3 py-2 text-sm"
                />

                {/* Email */}
                <input
                    type="email"
                    placeholder="Email"
                    className="border border-gray-400 rounded-lg px-3 py-2 text-sm"
                />

                {/* Age & Country */}
                <div className="flex space-x-2">
                    <select className="w-1/2 border border-gray-400 rounded-lg px-3 py-2 text-sm">
                        <option value="">Age</option>
                        {ages.map((a) => (
                            <option key={a} value={a}>
                                {a}
                            </option>
                        ))}
                    </select>
                    <select className="w-1/2 border border-gray-400 rounded-lg px-3 py-2 text-sm">
                        <option value="">{countriesApi.length === 0 ? "Loading..." : "Country"}</option>
                        {countriesApi.map((cty) => (
                            <option key={cty} value={cty}>
                                {cty}
                            </option>
                        ))}
                    </select>
                </div>

                <GenderToggleSignupDialog genderForm={genderForm} setGenderForm={setGenderForm} />

                <input
                    type="password"
                    placeholder="Password"
                    className="border border-gray-400 rounded-lg px-3 py-2 text-sm"
                />

                <button
                    type="submit"
                    className="bg-blue-600 text-white py-2 rounded-md"
                >
                    Register Now
                </button>

                <div className="text-center text-sm text-gray-500">Or with</div>

                <div className="flex space-x-2">
                    <button className="flex-1 border py-2 rounded-md">Google</button>
                    <button className="flex-1 bg-blue-600 text-white py-2 rounded-md">
                        Facebook
                    </button>
                </div>
                <p className="text-center text-sm text-gray-500">
                    Already have an account?{" "}
                    <Link to="/SignIn" className="text-blue-600 hover:underline">
                        Sign in
                    </Link>
                </p>
            </form>
        </div>
    );
}
