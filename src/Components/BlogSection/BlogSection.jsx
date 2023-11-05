// import React from "react";
import { Card } from "flowbite-react";
// import Image from 'next/image';
const BlogSection = () => {
    return (
        <div className="max-w-screen-xl mx-auto mb-14">
           


            <section className="bg-white pb-10 pt-20 dark:bg-dark lg:pb-5 lg:pt-[120px]">
                <div className="container">
                    <div className="-mx-4 flex flex-wrap">
                        <div className="w-full px-4">
                            <div className="mx-auto mb-[60px] max-w-[510px] text-center lg:mb-20">
                                <span className="mb-2 block text-lg font-semibold text-primary">
                                    Our Blogs
                                </span>
                                <h2 className="mb-4 text-4xl md:text-5xl font-bold ">
                                    Our Recent <span className=" text-indigo-500"> News</span>
                                </h2>
                               
                            </div>
                        </div>
                    </div>

                </div>

            </section>
          <div className="flex justify-center ">
          <Card
                className="md:max-w-xl lg:max-w-md"
                renderImage={() => <img className="h-72" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTzsKEGmZcXFZnlkqPAeDn7mXekiSkKpnKMDQ&usqp=CAU" alt="image 1" />}
            >
                <h5 className="text-2xl font-bold font-serif tracking-tight text-gray-900 dark:text-white">
                    Noteworthy technology acquisitions 2021
                </h5>
                <h2 className="text-xl font-semibold font-mono">Category: </h2>
                <p className="font-normal text-gray-700 dark:text-gray-400 font-mono border-l-4 border-l-indigo-600 pl-3">
                    Here are the biggest enterprise technology acquisitions of 2021 so far, in reverse chronological 
                </p>
                <div className="flex gap-5 ">
                    <button className="bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 animate-pulse  py-1  w-full border border-blue-500 font-semibold text-white hover:text-green-400 hover:border-green-400 uppercase font-serif">Details</button>
                    <button className=" bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 animate-pulse  py-1  w-full border border-blue-500 font-semibold text-white  hover:text-black hover:border-black uppercase font-serif">Wishlist</button>
                </div>
            </Card>

          </div>
        </div>
    );
};

export default BlogSection;