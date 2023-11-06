
import { useId } from "react";
import { useLoaderData } from "react-router-dom";

const BlogDetails = () => {
    const details = useLoaderData();
    console.log(details);
    const { img, category, title, userImg, userName, longDescription } = details;


    return (
        <div >


            <section className=" hidden overflow-hidden">
                {/* <nav
    className="relative flex w-full items-center justify-between bg-white py-2 shadow-sm shadow-neutral-700/10 dark:bg-neutral-800 dark:shadow-black/30  lg:flex-wrap lg:justify-start"
    data-te-navbar-ref>
    <div className="flex w-full flex-wrap items-center justify-between px-6">
      <div className="flex items-center">
        <button
          className="block border-0 bg-transparent py-2 pr-2.5 text-neutral-500 hover:no-underline hover:shadow-none focus:no-underline focus:shadow-none focus:outline-none focus:ring-0 dark:text-neutral-200 lg:hidden"
          type="button" data-te-collapse-init data-te-target="#navbarSupportedContentY"
          aria-controls="navbarSupportedContentY" aria-expanded="false" aria-label="Toggle navigation">
          <span className="[&>svg]:w-7">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="h-7 w-7">
              <path fill-rule="evenodd"
                d="M3 6.75A.75.75 0 013.75 6h16.5a.75.75 0 010 1.5H3.75A.75.75 0 013 6.75zM3 12a.75.75 0 01.75-.75h16.5a.75.75 0 010 1.5H3.75A.75.75 0 013 12zm0 5.25a.75.75 0 01.75-.75h16.5a.75.75 0 010 1.5H3.75a.75.75 0 01-.75-.75z"
                clip-rule="evenodd" />
            </svg>
          </span>
        </button>

        <a className="text-primary dark:text-primary-400" href="#!">
          <span className="[&>svg]:ml-2 [&>svg]:mr-3 [&>svg]:h-6 [&>svg]:w-6 [&>svg]:lg:ml-0">
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5"
              stroke="currentColor">
              <path stroke-linecap="round" stroke-linejoin="round"
                d="M9.813 15.904L9 18.75l-.813-2.846a4.5 4.5 0 00-3.09-3.09L2.25 12l2.846-.813a4.5 4.5 0 003.09-3.09L9 5.25l.813 2.846a4.5 4.5 0 003.09 3.09L15.75 12l-2.846.813a4.5 4.5 0 00-3.09 3.09zM18.259 8.715L18 9.75l-.259-1.035a3.375 3.375 0 00-2.455-2.456L14.25 6l1.036-.259a3.375 3.375 0 002.455-2.456L18 2.25l.259 1.035a3.375 3.375 0 002.456 2.456L21.75 6l-1.035.259a3.375 3.375 0 00-2.456 2.456zM16.894 20.567L16.5 21.75l-.394-1.183a2.25 2.25 0 00-1.423-1.423L13.5 18.75l1.183-.394a2.25 2.25 0 001.423-1.423l.394-1.183.394 1.183a2.25 2.25 0 001.423 1.423l1.183.394-1.183.394a2.25 2.25 0 00-1.423 1.423z" />
            </svg>
          </span>
        </a>
      </div>

      <div className="!visible hidden flex-grow basis-[100%] items-center lg:!flex lg:basis-auto"
        id="navbarSupportedContentY" data-te-collapse-item>
        <ul className="mr-auto lg:flex lg:flex-row" data-te-navbar-nav-ref>
          <li data-te-nav-item-ref>
            <a className="block py-2 pr-2 text-neutral-500 transition duration-150 ease-in-out hover:text-neutral-600 focus:text-neutral-600 disabled:text-black/30 dark:text-neutral-200 dark:hover:text-neutral-300 dark:focus:text-neutral-300 dark:disabled:text-white/30 lg:px-2 [&.active]:text-black/80 dark:[&.active]:text-white/80"
              href="#!" data-te-nav-link-ref data-te-ripple-init data-te-ripple-color="light"
              disabled>Dashboard</a>
          </li>
          <li data-te-nav-item-ref>
            <a className="block py-2 pr-2 text-neutral-500 transition duration-150 ease-in-out hover:text-neutral-600 focus:text-neutral-600 disabled:text-black/30 dark:text-neutral-200 dark:hover:text-neutral-300 dark:focus:text-neutral-300 dark:disabled:text-white/30 lg:px-2 [&.active]:text-black/80 dark:[&.active]:text-white/80"
              href="#!" data-te-nav-link-ref data-te-ripple-init data-te-ripple-color="light">Team</a>
          </li>
          <li className="mb-2 lg:mb-0" data-te-nav-item-ref>
            <a className="block py-2 pr-2 text-neutral-500 transition duration-150 ease-in-out hover:text-neutral-600 focus:text-neutral-600 disabled:text-black/30 dark:text-neutral-200 dark:hover:text-neutral-300 dark:focus:text-neutral-300 dark:disabled:text-white/30 lg:px-2 [&.active]:text-black/80 dark:[&.active]:text-white/80"
              href="#!" data-te-nav-link-ref data-te-ripple-init data-te-ripple-color="light">Projects</a>
          </li>
        </ul>
      </div>

      <div className="my-1 flex items-center lg:my-0 lg:ml-auto">
        <button type="button"
          className="mr-2 inline-block rounded px-6 pt-2.5 pb-2 text-xs font-medium uppercase leading-normal text-primary transition duration-150 ease-in-out hover:bg-neutral-500 hover:bg-opacity-10 hover:text-primary-600 focus:text-primary-600 focus:outline-none focus:ring-0 active:text-primary-700 dark:text-primary-400 dark:hover:bg-neutral-700 dark:hover:bg-opacity-60 dark:hover:text-primary-500 dark:focus:text-primary-500 dark:active:text-primary-600"
          data-te-ripple-init data-te-ripple-color="light">
          Login
        </button>
        <button type="button"
          className="inline-block rounded bg-primary px-6 pt-2.5 pb-2 text-xs font-medium uppercase leading-normal text-white shadow-[0_4px_9px_-4px_#3b71ca] transition duration-150 ease-in-out hover:bg-primary-600 hover:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] focus:bg-primary-600 focus:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] focus:outline-none focus:ring-0 active:bg-primary-700 active:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] dark:shadow-[0_4px_9px_-4px_rgba(59,113,202,0.5)] dark:hover:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.2),0_4px_18px_0_rgba(59,113,202,0.1)] dark:focus:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.2),0_4px_18px_0_rgba(59,113,202,0.1)] dark:active:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.2),0_4px_18px_0_rgba(59,113,202,0.1)]"
          data-te-ripple-init data-te-ripple-color="light">
          Sign up for free
        </button>
      </div>
    </div>
  </nav> */}

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

                        <div  className="max-h-screen">
                            <img className="  w-full h-[650px]" src={img} />
                        </div>

                        <div className="flex items-center justify-start mt-4 mb-4">

                            <a  className="px-2 py-1 font-bold bg-red-400 text-white rounded-lg hover:bg-gray-500">{category}</a>
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
                        <div className=" relative  border-r-4 border-r-blue-400  items-center w-full px-6 py-6 mx-auto mt-10 bg-white border border-gray-200 rounded-lg sm:px-8 md:px-12 sm:py-8 sm:shadow lg:w-5/6 xl:w-2/3">

                            <div className=" absolute  left-1 top-0 mt-6 mb-6 mr-6"><img src="https://avatars.githubusercontent.com/u/71964085?v=4" alt="avatar" className="hidden object-cover w-14 h-14 mx-4 rounded-full sm:block" />
                            </div>

                            <div className="pl-10"><h3 className="text-lg font-bold text-purple-500 sm:text-xl md:text-2xl">By James Amos</h3>
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