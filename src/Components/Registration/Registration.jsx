import { useState } from "react";
import { FaEye, FaEyeSlash } from "react-icons/fa";


const Registration = () => {
    const [showPassword, setShowPassword] = useState(false);
    const [showPassword2, setShowPassword2] = useState(false);
    return (
        <div>


            <div className="h-full bg-gray-400 dark:bg-gray-900">
                <div className="mx-auto">
                    <div className="flex justify-center px-6 py-12">
                        <div className="w-full xl:w-3/4 lg:w-11/12 flex">
                            <div className="w-full h-auto bg-gray-400 dark:bg-gray-800 hidden lg:block lg:w-5/12 bg-cover rounded-l-lg"

                                style={{ backgroundImage: ` url('https://source.unsplash.com/Mv9hjnEUHR4/600x800')` }}

                            ></div>
                            <div className="w-full lg:w-7/12 bg-white dark:bg-gray-700 p-5 rounded-lg lg:rounded-l-none">
                                <h3 className="py-4 text-2xl text-center text-gray-800 dark:text-white">Create an Account!</h3>

                                <form className="px-8 pt-6 pb-8 mb-4 bg-white dark:bg-gray-800 rounded">
                                    <div className="mb-4 md:flex md:justify-center">
                                        <div className="mb-4 md:mr-2 md:mb-0 flex-1">
                                            <label className="block mb-2 text-sm font-bold text-gray-700 dark:text-white" htmlFor="firstName">
                                                 Name
                                            </label>
                                            <input
                                                className="w-full px-3 py-2 text-sm leading-tight text-gray-700 dark:text-white border rounded shadow appearance-none focus:outline-none focus:shadow-outline"
                                                id="firstName"
                                                type="text"
                                                name="name"
                                                placeholder=" Name"
                                            />
                                        </div>
                                        <div className="md:ml-2 flex-1">
                                            <label className="block mb-2 text-sm font-bold text-gray-700 dark:text-white" htmlFor="lastName">
                                                Photo URL
                                            </label>
                                            <input
                                                className="w-full px-3 py-2 text-sm leading-tight text-gray-700 dark:text-white border rounded shadow appearance-none focus:outline-none focus:shadow-outline"
                                                id="lastName"
                                                type="text"
                                                name="photo"
                                                placeholder="Photo URL"
                                            />
                                        </div>
                                    </div>
                                    <div className="mb-4">
                                        <label className="block mb-2 text-sm font-bold text-gray-700 dark:text-white" htmlFor="email">
                                            Email
                                        </label>
                                        <input
                                            className="w-full px-3 py-2 mb-3 text-sm leading-tight text-gray-700 dark:text-white border rounded shadow appearance-none focus:outline-none focus:shadow-outline"
                                            id="email"
                                            type="email"
                                            name="email"
                                            placeholder="Email"
                                        />
                                    </div>
                                    <div className="mb-4 md:flex md:justify-around">
                                        <div className="mb-4 md:mr-2 md:mb-0 flex-1 relative">
                                            <label className="block mb-2 text-sm font-bold text-gray-700 dark:text-white" htmlFor="password">
                                                Password
                                            </label>
                                            <input
                                                className="w-full px-3 py-2 mb-3 text-sm leading-tight text-gray-700 dark:text-white border  rounded shadow appearance-none focus:outline-none focus:shadow-outline"
                                                id="password"
                                                type={showPassword ? "text" : "password"}
                                                name="password"
                                                placeholder="password"
                                            />
                                                <span className="absolute top-9 right-3" onClick={() => setShowPassword(!showPassword)}>
                                            {
                                                showPassword ? <FaEyeSlash></FaEyeSlash> : <FaEye></FaEye>
                                            }
                                        </span>

                                        </div>
                                        <div className="md:ml-2 flex-1 relative">
                                            <label className="block mb-2 text-sm font-bold text-gray-700 dark:text-white" htmlFor="c_password">
                                                Confirm Password
                                            </label>
                                            <input
                                                className="w-full px-3 py-2 mb-3 text-sm leading-tight text-gray-700 dark:text-white border rounded shadow appearance-none focus:outline-none focus:shadow-outline"
                                                id="c_password"
                                                type={showPassword2 ? "text" : "password"}
                                                placeholder="password"
                                            />
                                              <span className="absolute top-9 right-3" onClick={() => setShowPassword2(!showPassword2)}>
                                            {
                                                showPassword2 ? <FaEyeSlash></FaEyeSlash> : <FaEye></FaEye>
                                            }
                                        </span>
                                        </div>

                                    </div>
                                    <div className="my-2 items-center flex">

                                        <input className="checkbox checkbox-accent"

                                            type="checkbox" name="terms" id="terms" />
                                        <label
                                            className="ml-2"
                                            htmlFor="terms">Accept Out <a className="font-medium hover:underline" href="">Terms And Conditions</a></label>
                                    </div>
                                    <div className="mb-6 text-center">
                                        <button
                                            className="w-full px-4 py-2 font-bold text-white bg-blue-500 rounded-full hover:bg-blue-700 dark:bg-blue-700 dark:text-white dark:hover:bg-blue-900 focus:outline-none focus:shadow-outline"
                                            type="button"
                                        >
                                            Register Account
                                        </button>
                                    </div>
                                    <hr className="mb-6 border-t" />
                                  
                                    <div className="text-center">
                                        <a className="inline-block text-sm text-blue-500 dark:text-blue-500 align-baseline hover:text-blue-800"
                                            href="./index.html">
                                            Already have an account? Login!
                                        </a>
                                    </div>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Registration;