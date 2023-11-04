import { Avatar, Dropdown, Navbar } from 'flowbite-react';
import logo from '../../assets/logo2-removebg-preview.png'

const NavigationBar = () => {
    return (
        <div className='container mx-auto'>


            <Navbar className='my-6' fluid rounded>
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
                    <Navbar.Link href="#" active>
                        Home
                    </Navbar.Link>
                    <Navbar.Link href="#"> Add Blog</Navbar.Link>
                    <Navbar.Link href="#">All blogs</Navbar.Link>
                    <Navbar.Link href="#">Featured Blogs</Navbar.Link>
                    <Navbar.Link href="#">Wishlist</Navbar.Link>
                </Navbar.Collapse>
            </Navbar>
        </div>
    );
};

export default NavigationBar;