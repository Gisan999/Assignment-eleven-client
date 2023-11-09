
import { Link, useLoaderData } from "react-router-dom";
import useAuth from "../../useAuth/useAuth";
import axios from "axios";
import Swal from "sweetalert2";
import { useEffect, useState } from "react";

const BlogDetails = () => {
    const [comment, setComment] = useState([]);
    const { user } = useAuth();
    const details = useLoaderData();
    console.log(details);
    const { img, category, title, userImg, userName, longDescription, _id } = details;

    const handleComment = event => {
        event.preventDefault();
        const comment = event.target.comment.value;
        const postComment = { comment, userImage: user.photoURL, name: user.displayName, title };
        console.log(postComment);


        axios.post('https://assignment-eleven-server-peach.vercel.app/api/v1/comment', postComment)
            .then(res => {
                const data = res.data;
                console.log(data);
                if (data.insertedId) {
                    Swal.fire({
                        position: 'center',
                        title: 'Comment added successfully',
                        icon: 'success',
                        showConfirmButton: false,
                        timer: 2000
                    })
                    window.location.reload(false);
                }
            })
    }

    useEffect(() => {
        axios.get(`https://assignment-eleven-server-peach.vercel.app/api/v1/comment`)
            .then(res => {
                const data = res.data;
                const filter = data?.filter(data => data.title === title);
                // console.log(data);
                setComment(filter);
            })
    }, [title])
    console.log(comment);


    return (
        <div >
            <section className=" hidden overflow-hidden">

                <div
                    style={{
                        backgroundImage: `url(${img})`,
                        backgroundSize: 'cover',
                        backgroundRepeat: 'no-repeat',
                        backgroundPosition: 'right'
                    }}
                    className={`relative overflow-hidden bg-[50%] h-[600px] `}>
                    <div
                        className="absolute top-0 right-0 bottom-0 left-0 h-full w-full overflow-hidden bg-fixed bg-black bg-opacity-50">
                        {/* bg-[hsla(0,0%,0%,0.75)] */}
                        <div className="flex h-full items-center justify-center">
                            <div className="px-6 text-center text-white md:px-12">
                                <h1 className="mt-6 mb-16 text-5xl font-bold tracking-tight md:text-6xl xl:text-7xl ">
                                    {title}
                                </h1>
                                <div className="mb-2 inline-block rounded-full border-2 border-neutral-50 px-[46px] pt-[14px] pb-[12px] text-sm font-medium uppercase leading-normal text-neutral-50 transition duration-150 ease-in-out hover:border-neutral-100 hover:bg-neutral-500 hover:bg-opacity-10 hover:text-neutral-100 focus:border-neutral-100 focus:text-neutral-100 focus:outline-none focus:ring-0 active:border-neutral-200 active:text-neutral-200 md:mr-2 md:mb-0"
                                    data-te-ripple-init data-te-ripple-color="light" role="button">

                                    <div className="font-light text-gray-600">

                                        <a className="flex items-center "><img
                                            src={userImg}
                                            alt="avatar" className=" object-cover w-14 h-14 mx-4 rounded-full sm:block" />
                                            <h1 className="font-bold text-white
     hover:underline border-l-2 border-blue-600 pl-2 ">Written by:  {userName}</h1>
                                        </a>
                                    </div>

                                </div>
                                <div className="inline-block rounded-full px-12 pt-4 pb-3.5 text-sm font-medium uppercase leading-normal text-neutral-50 transition duration-150 ease-in-out hover:bg-neutral-500 hover:bg-opacity-20 hover:text-neutral-200 focus:text-neutral-200 focus:outline-none focus:ring-0 active:text-neutral-300"
                                    data-te-ripple-init data-te-ripple-color="light" role="button">{category}</div>
                            </div>
                        </div>
                    </div>
                </div>

                <div
                    className="-mt-2.5 text-white dark:text-neutral-800 md:-mt-4 lg:-mt-6 xl:-mt-10 h-[50px] scale-[2] origin-[top_center]">
                    <svg viewBox="0 0 2880 48" xmlns="http://www.w3.org/2000/svg">
                        <path d="M 0 48 L 1437.5 48 L 2880 48 L 2880 0 L 2160 0 C 1453.324 60.118 726.013 4.51 720 0 L 0 0 L 0 48 Z"
                            fill="currentColor"></path>
                    </svg>
                </div>
            </section>

            <div className="pt-6 bg-slate-50 ">
                <div className="  px-3 md:px-10 py-6 mx-auto">

                    <div className="container bg-teal-50  px-10 py-6 mx-auto ">

                        <div className="">
                            <img className="  w-full h-72 md:h-96 lg:h-[650px]" src={img} />
                        </div>

                        <div className="flex gap-5">
                            <div className="flex items-center justify-start mt-4 mb-4">

                                <div className="px-2 py-1 font-bold bg-red-400 text-white rounded-lg hover:bg-gray-500">{category}</div>
                            </div>
                            <div className="mt-4 mb-4">
                                {
                                    user?.displayName === userName ? <>
                                        <div className="flex items-center justify-start mt-4 mb-4">

                                            <Link to={`/updateBlog/${_id}`}>
                                                <div className="px-2 py-1 font-bold bg-red-400 text-white rounded-lg hover:bg-gray-500">Update</div>
                                            </Link>
                                        </div>
                                    </> : ''
                                }

                            </div>
                        </div>
                        <div className="mt-2">
                            <a href="#"
                                className="sm:text-3xl md:text-3xl lg:text-3xl xl:text-4xl font-bold text-purple-500  hover:underline">{title}</a>

                            <div className="font-light text-gray-600">

                                <a href="#" className="flex items-center mt-6 mb-6"><img
                                    src={userImg}
                                    alt="avatar" className=" object-cover w-14 h-14 mx-4 rounded-full sm:block" />
                                    <h1 className="font-bold text-gray-700 hover:underline border-l-2 border-blue-600 pl-2 ">{userName}</h1>
                                </a>
                            </div>
                        </div>

                        <div className="max-w-4xl py-3 px-5 md:px-10  mx-auto text-xl md:text-2xl text-gray-700 mt-4 rounded bg-gray-100">

                            <div>
                                <p className="text-2xl font-semibold text-center py-4">Description	</p>
                                <p className="mt-2  md:p-5 lg:p-8">{longDescription}</p>
                            </div>

                        </div>
                    </div>

                    <div className={`${ userName === user.displayName ? 'hidden' : ''} max-w-4xl pb-16 pt-7 xl:px-8 flex justify-center mx-auto`}>

                        <div className="w-full mt-16 md:mt-0 border-l-4 border-l-blue-400 rounded-lg ">
                            <form onSubmit={handleComment} className="relative z-10 h-auto p-8 py-10 overflow-hidden bg-white border-b-2 border-gray-300 rounded-lg shadow-2xl px-7">
                                <h3 className="mb-6 text-2xl font-medium text-center">Write a comment</h3>
                                <textarea required type="text" name="comment" className="w-full px-4 py-3 mb-4 border-2 border-transparent border-gray-200 rounded-lg focus:ring focus:ring-blue-500 focus:outline-none" placeholder="Write your comment" rows="5" cols="33"></textarea>
                                <input type="submit" value="Submit comment" name="submit" className=" text-white px-4 py-3 bg-blue-500  rounded-lg" />
                            </form>
                        </div>
                    </div>

                    <div className="max-w-4xl px-10 py-16 mx-auto   bg-white min-w-screen animation-fade animation-delay sm:px-12 xl:px-5">

                        <p className="mt-1 text-2xl font-bold text-left text-gray-800 sm:mx-6 sm:text-2xl md:text-3xl lg:text-4xl sm:text-center ">
                            All comments on this post
                        </p>

                        {
                            comment?.map(data => <div key={data._id} className=" relative  border-r-4 border-r-blue-400  items-center w-full px-6 py-6 mx-auto mt-10 bg-white border border-gray-200 rounded-lg sm:px-8 md:px-12 sm:py-8 sm:shadow lg:w-5/6 xl:w-2/3">

                                <div className=" absolute  left-1 top-2 mt-6 mb-6 mr-6"><img src={data['userImage']} alt="avatar" className="hidden object-cover w-12 h-12 mx-4 rounded-full sm:block" />
                                </div>

                                <div className="pl-10"><h3 className="text-lg font-semibold text-black sm:text-xl md:text-xl">{data['name']}</h3>
                                    {/* <p className="text-sm font-bold text-gray-300">August 22,2021</p> */}
                                    <p className="mt-2 text-base text-gray-600 sm:text-lg md:text-lg">{data['comment']}</p>
                                </div>

                            </div>)

                        }

                    </div>
                </div>
            </div>
        </div>

    );
};

export default BlogDetails;