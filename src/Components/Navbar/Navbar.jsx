import { Avatar, Dropdown, Navbar } from 'flowbite-react';
import logo from '../../assets/logo2-removebg-preview.png'
import { NavLink } from 'react-router-dom';
import { useEffect, useState } from 'react';

const NavigationBar = () => {

    const [scrollValue, setScrollValue] = useState(0);
    const scrollEvent = ()=>{
        setScrollValue(window.scrollY)
    }
    useEffect(()=>{
        const scroll = window.addEventListener("scroll", scrollEvent);
        return () => scroll;
    },[])

    return (
        <div className={` ${ scrollValue ? 'bg-slate-100' : ''} bg-white sticky top-0 z-50  border-b border-gray-400 shadow-md shadow-blue-100`}>
            <div className='container mx-auto'>


                <Navbar className={`mt-6 py-6  ${ scrollValue ? 'bg-slate-100' : ''}`} fluid rounded>
                    <Navbar.Brand href="">
                        <img className='w-40 ' src={logo} alt="Flowbite React Logo" />
                        {/* <span className="self-center whitespace-nowrap text-xl font-semibold dark:text-white">Flowbite React</span> */}
                    </Navbar.Brand>
                    <div className="flex md:order-2">
                        <Dropdown
                            arrowIcon={false}
                            inline
                            label={
                                <Avatar alt="User settings" img="https://ps.w.org/user-avatar-reloaded/assets/icon-256x256.png?rev=2540745" rounded />
                            }
                        >
                            <Dropdown.Header>
                                <span className="block text-sm">Bonnie Green</span>
                                <span className="block truncate text-sm font-medium">name@flowbite.com</span>
                            </Dropdown.Header>
                            <Dropdown.Item>Dashboard</Dropdown.Item>
                            <Dropdown.Item>Settings</Dropdown.Item>
                            <Dropdown.Item>Earnings</Dropdown.Item>
                            <Dropdown.Divider />
                            <Dropdown.Item>Sign out</Dropdown.Item>
                        </Dropdown>
                        <Navbar.Toggle />
                    </div>
                    <Navbar.Collapse>

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
                            to="/blogDetails"
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
                            All Blogs
                        </NavLink></li>
                        <li className="text-base  "><NavLink
                            to="/#"
                            style={({ isActive, isPending }) => {
                                return {
                                    fontWeight: isActive ? "bold" : "",
                                    color: isPending ? "red" : "black",
                                };
                            }}
                        >
                            Featured Blogs
                        </NavLink></li>
                        <li className="text-base  "><NavLink
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

                    </Navbar.Collapse>
                </Navbar>
            </div>
        </div>
    );
};

export default NavigationBar;