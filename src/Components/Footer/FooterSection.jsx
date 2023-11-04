import { Footer } from 'flowbite-react';
import { BsDribbble, BsFacebook, BsGithub, BsInstagram, BsTwitter } from 'react-icons/bs';
import logo from '../../assets/logo2-removebg-preview.png'
const FooterSection = () => {
    return (
        <div>
            <Footer container>
                <div className="w-full lg:px-14 py-6">
                    <div className="grid w-full justify-between sm:flex sm:justify-between md:flex md:grid-cols-1">
                        <div>
                            <Footer.Brand
                                href=""
                                src={logo}
                            />
                        </div>
                        <div className="grid grid-cols-2 gap-8 sm:mt-4 sm:grid-cols-3 sm:gap-6">
                            <div>
                                <Footer.Title title="about" />
                                <Footer.LinkGroup col>
                                    <Footer.Link >Blog</Footer.Link>
                                    <Footer.Link >Blogging</Footer.Link>
                                </Footer.LinkGroup>
                            </div>
                            <div>
                                <Footer.Title title="Follow us" />
                                <Footer.LinkGroup col>
                                    <Footer.Link >Github</Footer.Link>
                                    <Footer.Link >Discord</Footer.Link>
                                </Footer.LinkGroup>
                            </div>
                            <div>
                                <Footer.Title title="Legal" />
                                <Footer.LinkGroup col>
                                    <Footer.Link >Privacy Policy</Footer.Link>
                                    <Footer.Link >Terms &amp; Conditions</Footer.Link>
                                </Footer.LinkGroup>
                            </div>
                        </div>
                    </div>
                            <div className='flex justify-end py-6'>
                                <input className='bg-gray-50 lg:pr-24 px-5 rounded-md border-4 border-red-300' placeholder='Email Address' type="email" name="email" id="" />
                                <button className='bg-sky-400 px-5 border-4 border-red-400  rounded-r-lg relative right-8 text-white font-bold'>Subscribe</button>
                            </div>
                    <Footer.Divider />
                    <div className="w-full sm:flex sm:items-center sm:justify-between">
                        <Footer.Copyright by="Creativity™" year={2022} />
                        <div className="mt-4 flex space-x-6 sm:mt-0 sm:justify-center">
                            <Footer.Icon icon={BsFacebook} />
                            <Footer.Icon icon={BsInstagram} />
                            <Footer.Icon icon={BsTwitter} />
                            <Footer.Icon icon={BsGithub} />
                            <Footer.Icon icon={BsDribbble} />
                        </div>
                    </div>
                </div>
            </Footer>

        </div>
    );
};

export default FooterSection;