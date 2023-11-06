import { useEffect, useState } from "react";
import Banner from "../Banner/Banner";
import BlogSection from "../BlogSection/BlogSection";
import SubscribeSection from "./SubscribeSection";
import axios from "axios";

const Home = () => {
    const [blogs, setBlogs] = useState([]);

    useEffect(() => {

        axios.get('http://localhost:5000/api/v1/blogs')
            .then(res => {
                setBlogs(res.data)
            })

    }, [])


    return (
        <div>
            <Banner />

            <div className="max-w-screen-xl mx-auto my-12">
            
                <div className="text-center">
                    <span className="my-4 mt-14 block text-xl font-semibold text-primary">
                        Our Blogs
                    </span>
                    <h2 className="mb-8 lg:mb-16 text-4xl md:text-5xl font-bold ">
                        Our Recent <span className=" text-indigo-500"> News</span>
                    </h2>

                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
                    {
                        blogs.map(data => <BlogSection key={data.title} blogs={data}></BlogSection>)
                    }
                </div>
            </div>



            <SubscribeSection />
        </div>
    );
};

export default Home;