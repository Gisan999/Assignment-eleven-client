import { Avatar, Dropdown, Navbar } from 'flowbite-react';
import logo from '../../assets/logo2-removebg-preview.png'
import { Link, NavLink, useNavigate } from 'react-router-dom';
import { useEffect, useState } from 'react';
import useAuth from '../../useAuth/useAuth';
import Swal from 'sweetalert2';

const NavigationBar = () => {
    const navigate = useNavigate();

    const { user, logOut } = useAuth();

    const handleLogOut = () => {
        logOut()
            .then(res => {
                console.log(res);
                navigate('/')
                Swal.fire({
                    position: 'center',
                    title: 'Successfully Logout ',
                    icon: 'success',
                    showConfirmButton: false,
                    timer: 2000
                })
            })
            .catch()
    }

    const [scrollValue, setScrollValue] = useState(0);
    const scrollEvent = () => {
        setScrollValue(window.scrollY)
    }
    useEffect(() => {
        const scroll = window.addEventListener("scroll", scrollEvent);
        return () => scroll;
    }, [])

    return (
        <div className={` ${scrollValue ? 'bg-slate-100' : ''}  sticky top-0 z-50  border-b border-gray-400 shadow-md shadow-blue-100`}>
            <div className='container mx-auto'>


                <Navbar className={`mt-6 py-6  ${scrollValue ? 'bg-slate-100' : ''}`} fluid rounded>
                    <Navbar.Brand href="">
                        <img className='w-36 ' src={logo} alt="" />
                        {/* <span className="self-center whitespace-nowrap text-xl font-semibold dark:text-white">Flowbite React</span> */}
                    </Navbar.Brand>

                    {
                        user ? <>

                            <div className="flex md:order-2 gap-2">
                                <Dropdown
                                    arrowIcon={false}
                                    inline
                                    label={
                                        <Avatar alt="User settings" img={user.photoURL} rounded />
                                    }
                                >
                                    <Dropdown.Header>
                                        <span className="block text-sm">{user?.displayName}</span>
                                        <span className="block truncate text-sm font-medium">{user?.email}</span>
                                    </Dropdown.Header>
                                    <Dropdown.Divider />
                                    <Dropdown.Item onClick={handleLogOut}>Sign out</Dropdown.Item>
                                </Dropdown>
                                <Navbar.Toggle />
                            </div>
                        </> : <>
                            <div className="flex md:order-2">
                                <div className='hidden lg:block'>
                                    <Link to={"/login"}>
                                        <button className="relative inline-flex items-center justify-center p-0.5 mb-2 mr-2 overflow-hidden text-sm font-medium text-gray-900 rounded-lg group bg-gradient-to-br from-purple-500 to-pink-500 group-hover:from-purple-500 group-hover:to-pink-500 hover:text-white dark:text-white focus:ring-4 focus:outline-none focus:ring-purple-200 dark:focus:ring-purple-800">
                                            <span className="relative px-5 py-2 transition-all ease-in duration-75 bg-white dark:bg-gray-900 rounded-md group-hover:bg-opacity-0">
                                                Log In
                                            </span>
                                        </button>
                                    </Link>
                                    <Link to={"/registration"}>
                                        <button type="button" className="text-white bg-gradient-to-r from-purple-500 to-pink-500 hover:bg-gradient-to-l focus:ring-4 focus:outline-none focus:ring-purple-200 dark:focus:ring-purple-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-2 mb-2">Registration</button>
                                    </Link>
                                </div>
                                <Navbar.Toggle />
                            </div>
                            <div className='md:order-2  hidden md:block lg:hidden'>
                            <Link to={"/login"}>
                                        <button className="relative inline-flex items-center justify-center p-0.5 mb-2 mr-2 overflow-hidden text-sm font-medium text-gray-900 rounded-lg group bg-gradient-to-br from-purple-500 to-pink-500 group-hover:from-purple-500 group-hover:to-pink-500 hover:text-white dark:text-white focus:ring-4 focus:outline-none focus:ring-purple-200 dark:focus:ring-purple-800">
                                            <span className="relative px-5 py-2 transition-all ease-in duration-75 bg-white dark:bg-gray-900 rounded-md group-hover:bg-opacity-0">
                                                Log In
                                            </span>
                                        </button>
                                    </Link>
                                    
                            </div>
                        </>

                    }


                    <Navbar.Collapse className='md:pr-16 lg:pr-0 effect'>

                        <li className="text-base  "><NavLink
                            to="/"
                            style={({ isActive, isPending }) => {
                                return {
                                    fontWeight: isActive ? "bold" : "",
                                    color: isPending ? "red" : "black",
                                };
                            }}
                        >
                            Home
                        </NavLink></li>
                        <li className="text-base "><NavLink
                            to="/addBlog"
                            style={({ isActive, isPending }) => {
                                return {
                                    fontWeight: isActive ? "bold" : "",
                                    color: isPending ? "red" : "black",
                                };
                            }}
                        >
                            Add Blog
                        </NavLink></li>
                        <li className="text-base "><NavLink
                            to="/allBlog"
                            style={({ isActive, isPending }) => {
                                return {
                                    fontWeight: isActive ? "bold " : "",
                                    color: isPending ? "red" : "black",
                                };
                            }}
                        >
                            Blogs
                        </NavLink></li>
                        <li className="text-base block md:hidden lg:block "><NavLink
                            to="/blogDetails"
                            style={({ isActive, isPending }) => {
                                return {
                                    fontWeight: isActive ? "bold" : "",
                                    color: isPending ? "red" : "black",
                                };
                            }}
                        >
                            Featured Blogs
                        </NavLink></li>

                        <li className="text-base block md:hidden lg:block"><NavLink
                            to="/#"
                            style={({ isActive, isPending }) => {
                                return {
                                    fontWeight: isActive ? "bold " : "",
                                    color: isPending ? "red" : "black",
                                };
                            }}
                        >
                            Wishlist
                        </NavLink></li>
                        <li className={`text-base block md:hidden ${user ? 'hidden' : ''}`}><NavLink
                            to="/login"
                            style={({ isActive, isPending }) => {
                                return {
                                    fontWeight: isActive ? "bold " : "",
                                    color: isPending ? "red" : "black",
                                };
                            }}
                        >
                           Log In
                        </NavLink></li>
                        <li className='text-base hidden md:block lg:hidden'>

                            <Dropdown label="Pages" inline>
                                <Dropdown.Item><Link to={'/allBlog'}>  All Blogs</Link></Dropdown.Item>
                                <Dropdown.Item><Link to={'/#'}> Featured Blogs</Link></Dropdown.Item>
                                <Dropdown.Item><Link to={'/#'}>Wishlist</Link></Dropdown.Item>
                                
                            </Dropdown>
                        </li>

                    </Navbar.Collapse>
                </Navbar>
            </div>
        </div>
    );
};

export default NavigationBar;