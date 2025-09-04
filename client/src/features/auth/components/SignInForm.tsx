import { Link } from "react-router-dom"

export default function SignInForm() {
    return (
        <form className="flex flex-col space-y-4 mt-6">
            <input
                type="text"
                placeholder="Username & email"
                className="border border-gray-400 rounded-lg px-3 py-2 text-sm"
            />
            <input
                type="password"
                placeholder="password"
                className="border border-gray-400 rounded-lg px-3 py-2 text-sm"
            />
            <button
                type="submit"
                className="bg-blue-600 text-white py-2 rounded-md"
            >
                Login
            </button>

             <div className="text-center text-sm text-gray-500">Or with</div>

            <div className="flex space-x-2">
                <button className="flex-1 border py-2 rounded-md">Google</button>
                <button className="flex-1 bg-blue-600 text-white py-2 rounded-md">
                    Facebook
                </button>
            </div>

            {/* Sign in */}
            <p className="text-center text-sm text-gray-500">
                Dont have an account?{" "}
                <Link to="/SignUp" className="text-blue-600 hover:underline">
                    Sign Up
                </Link>
            </p>
        </form>
    )
}