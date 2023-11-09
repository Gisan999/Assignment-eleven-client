import { useEffect, useState } from "react";
import Banner from "../Banner/Banner";
import BlogSection from "../BlogSection/BlogSection";
import SubscribeSection from "./SubscribeSection";
import axios from "axios";
import { Link } from "react-router-dom";
import { useInView } from 'react-intersection-observer';
import ExtraSection from "./ExtraSection";
import MusicSection from "./MusicSection";
import Aos from "aos";
import 'aos/dist/aos.css'

const Home = () => {
    const [blogs, setBlogs] = useState([]);

    const { ref, inView } = useInView({
        threshold: 0,
    });
       
    useEffect(() => {
        Aos.init();
      }, [])
    

    useEffect(() => {

        axios.get('https://assignment-eleven-server-peach.vercel.app/api/v1/blogs')
            .then(res => {
                setBlogs(res.data)
            })

    }, [])


    return (
        <div>
            <Banner />
            <div data-aos="fade-up">
                <MusicSection/>
            </div>
           
            <div className="max-w-screen-xl mx-auto my-12">

                <div data-aos="fade-up" className="text-center">
                    <span className="my-4 mt-14 block text-xl font-semibold text-primary">
                        Our Blogs
                    </span>
                    <h2 className="mb-8 lg:mb-16 text-4xl md:text-5xl font-bold ">
                        Our Recent <span className=" text-indigo-500"> News</span>
                    </h2>

                </div>
                <Link to={"/allBlog"}>
                    <div className={`flex justify-center sticky top-28 my-5 z-20 ${inView ? "block" : "hidden"}`}>
                        <button className="btn w-full  btn-info">Show More</button>
                    </div></Link>

                <div  data-aos="fade-up" className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
                    {
                        blogs.slice(-6).map(data => <BlogSection key={data.title} blogs={data}></BlogSection>)
                    }
                </div>

            </div>

            <div  ref={ref}  className="container mx-auto">
                <ExtraSection />
            </div>


            <div data-aos="fade-up"><SubscribeSection /></div>
        </div>
    );
};

export default Home;