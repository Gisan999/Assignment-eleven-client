/* eslint-disable react/prop-types */
import { Card } from "flowbite-react";
import { Link } from "react-router-dom";
import useAuth from "../../useAuth/useAuth";
import axios from "axios";
import Swal from "sweetalert2";
const BlogSection = ({ blogs }) => {
    const { user } = useAuth();
    const { img, category, title, shortDescription, _id, longDescription, userName, userImg } = blogs;

    const setWishList = { email: user?.email, userName, userImg, img, category, title, shortDescription, longDescription, }

    const handleWishList = () => {
        axios.post(`https://assignment-eleven-server-peach.vercel.app/api/v1/wishList`, setWishList)
            .then(res => {
                const data = res.data;
                console.log(data);
                if (data.acknowledged) {
                    Swal.fire({
                        position: 'top-end',
                        icon: 'success',
                        title: 'Your Blog has been added to wishlist',
                        showConfirmButton: false,
                        timer: 1500
                    })
                }
            })
    }

console.log(blogs);
    return (
        <div className="max-w-screen-xl mx-auto mb-14">


            <div className="flex justify-center p-5 lg:p-0 ">
                <Card
                    className="border border-fuchsia-200 shadow-none "
                >
                    <div className="w-full h-72 ">
                        <img className="w-full h-full transition duration-300 ease-in-out hover:scale-110" src={img} alt="" />
                    </div>
                    <div className="h-20">
                        <h5 className="text-2xl font-bold font-serif tracking-tight text-gray-900 dark:text-white">
                            {title}
                        </h5>
                    </div>
                    <h2 className="text-xl font-semibold font-mono">Category: {category}</h2>
                    <p className="font-normal text-gray-700 dark:text-gray-400 font-mono border-l-4 border-l-indigo-600 pl-3">
                        {
                            shortDescription.length > 30 ? shortDescription.slice(0, 50) : shortDescription
                        }
                    </p>
                    <div className="flex gap-5 ">

                        <div className="w-full">
                            <Link to={`/blogDetails/${_id}`}>
                                <button className="bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 animate-pulse  py-1  w-full border border-blue-500 font-semibold text-white hover:text-green-400 hover:border-green-400 uppercase font-serif">Details</button></Link>

                        </div>
                        <div className="w-full">
                            <button onClick={handleWishList} className=" bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 animate-pulse  py-1  w-full border border-blue-500 font-semibold text-white  hover:text-black hover:border-black uppercase font-serif">Wishlist</button>
                        </div>
                    </div>
                </Card>

            </div>
        </div>
    );
};

export default BlogSection;