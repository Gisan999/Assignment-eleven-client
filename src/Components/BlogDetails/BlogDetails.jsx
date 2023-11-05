
const BlogDetails = () => {
    return (
        <div>
            <div className="mt-6 bg-gray-50">
                <div className=" px-3 md:px-10 py-6 mx-auto">

                    <div className="max-w-6xl px-10 py-6 mx-auto bg-gray-50">

                        <a href="#_" className="block transition duration-200 ease-out transform hover:scale-110">
                            <img className="object-cover w-full shadow-sm h-full" src="https://images.unsplash.com/photo-1579621970563-ebec7560ff3e?ixlib=rb-1.2.1&amp;ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&amp;auto=format&amp;fit=crop&amp;w=1951&amp;q=80" />
                        </a>

                        <div className="flex items-center justify-start mt-4 mb-4">
                           
                            <a href="#" className="px-2 py-1 font-bold bg-red-400 text-white rounded-lg hover:bg-gray-500">web development</a>
                        </div>
                        <div className="mt-2">
                            <a href="#"
                                className="sm:text-3xl md:text-3xl lg:text-3xl xl:text-4xl font-bold text-purple-500  hover:underline">Django Authentication with oauth using facebook,twitter and google</a>

                            {/* <div className="flex justify-start items-center mt-2">
                                <p className="text-sm text-green-500 font-bold bg-gray-100 rounded-full py-2 px-2 hover:text-red-500">3000</p>
                                <p className="text-sm text-gray-400 font-bold ml-5">Views</p>

                            </div> */}

                            <div className="font-light text-gray-600">

                                <a href="#" className="flex items-center mt-6 mb-6"><img
                                    src="https://avatars.githubusercontent.com/u/71964085?v=4"
                                    alt="avatar" className=" object-cover w-14 h-14 mx-4 rounded-full sm:block" />
                                    <h1 className="font-bold text-gray-700 hover:underline">By James Amos</h1>
                                </a>
                            </div>
                        </div>

                        <div className="max-w-4xl py-3 px-5 md:px-10  mx-auto text-xl md:text-2xl text-gray-700 mt-4 rounded bg-gray-100">

                            <div>
                                <p className="mt-2  md:p-5 lg:p-8">If you created a web application and wanted it to grow a user base reall quickly,the easiest way is to avoid bothering them with alot forms. No one likes filling up forms! A web form should and must only be used when necessary,in case a user doesnt have account with any of the social networks.That is the moment you want to implement social login on your application.</p>
                            </div>



                        </div>
                    </div>



                    <div className="max-w-4xl pb-16 pt-7 xl:px-8 flex justify-center mx-auto">

                        <div className="w-full mt-16 md:mt-0 border-l-4 border-l-blue-400 rounded-lg ">
                            <form className="relative z-10 h-auto p-8 py-10 overflow-hidden bg-white border-b-2 border-gray-300 rounded-lg shadow-2xl px-7">
                                <h3 className="mb-6 text-2xl font-medium text-center">Write a comment</h3>
                                <textarea type="text" name="comment" className="w-full px-4 py-3 mb-4 border-2 border-transparent border-gray-200 rounded-lg focus:ring focus:ring-blue-500 focus:outline-none" placeholder="Write your comment" rows="5" cols="33"></textarea>
                                <input type="submit" value="Submit comment" name="submit" className=" text-white px-4 py-3 bg-blue-500  rounded-lg" />
                            </form>
                        </div>
                    </div>



                    <div className="max-w-4xl px-10 py-16 mx-auto   bg-white min-w-screen animation-fade animation-delay sm:px-12 xl:px-5">

                        <p className="mt-1 text-2xl font-bold text-left text-gray-800 sm:mx-6 sm:text-2xl md:text-3xl lg:text-4xl sm:text-center ">
                            All comments on this post
                        </p>
                        <div className="flex  border-r-4 border-r-blue-400  items-center w-full px-6 py-6 mx-auto mt-10 bg-white border border-gray-200 rounded-lg sm:px-8 md:px-12 sm:py-8 sm:shadow lg:w-5/6 xl:w-2/3">

                            <a href="#" className="flex items-center mt-6 mb-6 mr-6"><img src="https://avatars.githubusercontent.com/u/71964085?v=4" alt="avatar" className="hidden object-cover w-14 h-14 mx-4 rounded-full sm:block" />
                            </a>

                            <div><h3 className="text-lg font-bold text-purple-500 sm:text-xl md:text-2xl">By James Amos</h3>
                                <p className="text-sm font-bold text-gray-300">August 22,2021</p>
                                <p className="mt-2 text-base text-gray-600 sm:text-lg md:text-normal">
                                    Please help with how you did the migrations for the blog database fields.I tried mine using exactly what you instructed but its not working!!.</p>
                            </div>

                        </div>
                      

                    </div>
                </div>
            </div>
        </div>
     
    );
};

export default BlogDetails;