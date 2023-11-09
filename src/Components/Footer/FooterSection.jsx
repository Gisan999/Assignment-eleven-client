import { Footer } from 'flowbite-react';
import { BsDribbble, BsFacebook, BsGithub, BsInstagram, BsTwitter } from 'react-icons/bs';
import logo from '../../assets/logo2-removebg-preview.png'
const FooterSection = () => {
    return (
        <div>
            <Footer className='bg-slate-50' container>
                <div className="w-full  py-24  container mx-auto">
                    <div className="grid w-full justify-between sm:flex sm:justify-between md:flex md:grid-cols-1">
                        <div>
                            {/* <Footer.Brand
                                href=""
                                src={logo}
                            /> */}
                            <img className='w-40 lg:w-72 ' src={logo} alt="" />
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