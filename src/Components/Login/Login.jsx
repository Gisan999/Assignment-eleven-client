import { useState } from "react";
import { FaEye, FaEyeSlash } from "react-icons/fa";
import { Link } from "react-router-dom";


const Login = () => {
    const [showPassword, setShowPassword] = useState(false);

    const handleLogin = event => {
        event.preventDefault();
        const form = event.target;
        const email = form.email.value;
        const password = form.password.value;
        console.log(email, password);

    }

    return (
        <div className="container mx-auto">
            <section className="">
                <div className="container h-full px-6 py-12 lg:py-24">
                    <div
                        className="g-6 flex h-full flex-wrap items-center justify-center lg:justify-between">
                        <div className="mb-12 md:mb-0 md:w-8/12 lg:w-6/12">
                            <img
                                src="https://tecdn.b-cdn.net/img/Photos/new-templates/bootstrap-login-form/draw2.svg"
                                className="w-full"
                                alt="Phone image" />
                        </div>

                        <div className="md:w-8/12 lg:ml-6 lg:w-5/12">
                            <form onSubmit={handleLogin}>
                                <div className="relative mb-6" data-te-input-wrapper-init>
                                <label
                                    
                                    >
                                        Email address
                                    </label>

                                    <input name="email"
                                        type="text"
                                        className="peer hover:bg-gray-200 block min-h-[auto] w-full rounded border bg-transparent px-3 py-[0.32rem] leading-[2.15] outline-none transition-all duration-200 ease-linear focus:placeholder:opacity-100 data-[te-input-state-active] motion-reduce:transition-none dark:text-neutral-200  [&:not([data-te-input-placeholder-active])]"
                                        id="exampleFormControlInput3"
                                        placeholder="Email address" />
                                  
                                </div>

                                <div className="relative mb-6" data-te-input-wrapper-init>
                                <label
                                       
                                       >Password
                                       </label>
                                    <input name="password"
                                          type={showPassword ? "text" : "password"}
                                        className="peer hover:bg-gray-200 block min-h-[auto] w-full rounded border bg-transparent px-3 py-[0.32rem] leading-[2.15] outline-none transition-all duration-200 ease-linear focus:placeholder:opacity-100 data-[te-input-state-active]motion-reduce:transition-none dark:text-neutral-200  [&:not([data-te-input-placeholder-active])]"
                                        id="exampleFormControlInput33"
                                        placeholder="Password" />
                                                 <span className="absolute top-9 right-3" onClick={() => setShowPassword(!showPassword)}>
                                            {
                                                showPassword ? <FaEyeSlash></FaEyeSlash> : <FaEye></FaEye>
                                            }
                                        </span>
                                  
                                </div>
                                <button
                                    type="submit"
                                    className="w-full shadow-lg hover:shadow-sky-600 bg-blue-500 font-semibold text-lg py-2 rounded-md border border-black text-white hover:bg-blue-700"
                                    data-te-ripple-init
                                    data-te-ripple-color="light">
                                    Sign in
                                </button>

                                <div
                                    className="my-4 flex items-center before:mt-0.5 before:flex-1 before:border-t before:border-neutral-300 after:mt-0.5 after:flex-1 after:border-t after:border-neutral-300">
                                    <p
                                        className="mx-4 mb-0 text-center font-semibold dark:text-neutral-200">
                                        OR
                                    </p>
                                </div>

                                <a
                                    className="mb-3 flex w-full items-center justify-center rounded bg-primary px-7 pb-2.5 pt-3 text-center text-sm font-medium uppercase leading-normal text-white shadow-[0_4px_9px_-4px_#3b71ca] transition duration-150 ease-in-out hover:bg-primary-600 hover:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] focus:bg-primary-600 focus:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] focus:outline-none focus:ring-0 active:bg-primary-700 active:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] dark:shadow-[0_4px_9px_-4px_rgba(59,113,202,0.5)] dark:hover:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.2),0_4px_18px_0_rgba(59,113,202,0.1)] dark:focus:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.2),0_4px_18px_0_rgba(59,113,202,0.1)] dark:active:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.2),0_4px_18px_0_rgba(59,113,202,0.1)]"
                                    style={{backgroundColor: "#3b5998"}}
                                    href="#!"
                                    role="button"
                                    data-te-ripple-init
                                    data-te-ripple-color="light">
                                    <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        className="mr-2 h-3.5 w-3.5"
                                        fill="currentColor"
                                        viewBox="0 0 24 24">
                                        <path
                                            d="M9 8h-3v4h3v12h5v-12h3.642l.358-4h-4v-1.667c0-.955.192-1.333 1.115-1.333h2.885v-5h-3.808c-3.596 0-5.192 1.583-5.192 4.615v3.385z" />
                                    </svg>
                                    Continue with Facebook
                                </a>
                                <p className="text-center">If there is no account<Link to={'/registration'}   className="text-base hover:text-blue-600 hover:underline hover:font-semibold"> Registration</Link></p>
                              
                            </form>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default Login;