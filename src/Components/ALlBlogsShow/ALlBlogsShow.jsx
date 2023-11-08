/* eslint-disable react/prop-types */

import axios from "axios";
import { Card } from "flowbite-react";
import { Link } from "react-router-dom";
import Swal from "sweetalert2";
import useAuth from "../../useAuth/useAuth";
import Skeleton from 'react-loading-skeleton'
import 'react-loading-skeleton/dist/skeleton.css'
import { useEffect, useState } from "react";


const ALlBlogsShow = ({ blogs }) => {
    const [emulatorName, setEmulatorName] = useState('');
    const [emulatorImage, setEmulatorImage] = useState('');
    const [emulatorCategory, setEmulatorCategory] = useState('');
    const [emulatorDescription, setEmulatorDescription] = useState('');
    const [emulatorButton, setEmulatorButton] = useState('');
    const { user } = useAuth();
    const { email } = user;
    const { title, img, userName, userImg, longDescription, shortDescription, category, _id, } =
        blogs;
        // const id = {_id};
    const setWishList = { email, userName, userImg, img, category, title, shortDescription, id:_id, longDescription }


    useEffect(() => {
        setTimeout(() => {
            setEmulatorName(title)
            setEmulatorImage(img)
            setEmulatorCategory(category)
            setEmulatorDescription(shortDescription)
            setEmulatorButton('ll')

        }, 2 * 1000);
    }, [img, title, shortDescription, category])


    const handleWishList = () => {
        axios.post(`http://localhost:5000/api/v1/wishList`, setWishList)
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




    return (
        <div>
            <div className="flex justify-center p-5 lg:p-0 ">
                <Card
                    className={emulatorButton ? "border border-fuchsia-200 shadow-none " : 'border border-gray shadow-none '}
                >
                    <div className="w-full  lg:block h-72 ">
                        {emulatorImage && (
                            <img className="w-full h-full transition duration-300 ease-in-out hover:scale-110" src={emulatorImage} alt="" />
                        )}
                        {!emulatorImage && <Skeleton count={1} height="290px" />}
                    </div>

                    <div className="h-20  lg:block">
                        <h5 className="text-2xl font-bold font-serif tracking-tight text-gray-900 dark:text-white">
                            {/* {title} */}
                            {emulatorName || <Skeleton count={2} width="280px" />}
                        </h5>
                    </div>

                    <div className=" hidden lg:block">

                        {!emulatorCategory && <Skeleton width="380px" />}

                        {emulatorCategory && (
                            <h2 className="text-xl font-semibold font-mono">Category:{emulatorCategory} </h2>
                        )}
                    </div>
                    <div className=" lg:hidden">

                        {!emulatorCategory && <Skeleton width="280px" />}

                        {emulatorCategory && (
                            <h2 className="text-xl font-semibold font-mono">Category:{emulatorCategory} </h2>
                        )}
                    </div>


                    {
                        emulatorDescription && (
                            <p className="font-normal text-gray-700 dark:text-gray-400 font-mono border-l-4 border-l-indigo-600 pl-3">
                                {
                                    shortDescription.length > 30 ? shortDescription.slice(0, 60) : shortDescription
                                }
                            </p>
                        )
                    }
                    {!emulatorCategory && <Skeleton count={2} />}


                    <div className="w-full  lg:block  ">
                        {emulatorImage && (
                            <div className="flex gap-5 ">

                                <div className="w-full">
                                    <Link to={`/blogDetails/${_id}`}>
                                        <button className="bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 animate-pulse  py-1  w-full border border-blue-500 font-semibold text-white hover:text-green-400 hover:border-green-400 uppercase font-serif">Details</button></Link>

                                </div>
                                <div className="w-full">
                                    <button onClick={handleWishList} className=" bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 animate-pulse  py-1  w-full border border-blue-500 font-semibold text-white  hover:text-black hover:border-black uppercase font-serif">Wishlist</button>
                                </div>
                            </div>
                        )}
                        {!emulatorImage && <Skeleton count={1} height={35} />}
                    </div>

                </Card>

            </div>
        </div>
    );
};

export default ALlBlogsShow;