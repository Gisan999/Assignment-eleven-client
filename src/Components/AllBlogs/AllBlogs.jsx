import { useLoaderData } from "react-router-dom";
import ALlBlogsShow from "../ALlBlogsShow/ALlBlogsShow";
import { Button } from "flowbite-react";
import { useEffect, useState } from "react";
import { SlDrawer } from "react-icons/sl";
import { TfiReload } from "react-icons/tfi";
import Skeleton from "react-loading-skeleton";


const AllBlogs = () => {
    const [emulator, setEmulator] = useState('');
    const allData = useLoaderData();
    const [filterData, setFilterData] = useState(allData);
    const [blogCount, setBlogCount] = useState(12);
    const [search, setSearch] = useState('')
    console.log(search);

    const btnClicked = text => {
        const remaining = allData?.filter(data => data['category'] === text);
        setFilterData(remaining);
    }

    const btnReload = () => {
        window.location.reload(false);
    }

    useEffect(() => {
        setTimeout(() => {
            setEmulator('Select Category')

        }, 2 * 1000);
    }, [])

    return (
        <div className="mb-12">


            <div className="max-w-[1750px]  mx-auto">
                <div className="grid grid-cols-9 gap-5">
                    <div className=" hidden lg:block col-span-2 mt-5">

                        <div className="sticky top-24 ">


                            <div className={!emulator ? 'flex justify-center my-6 mt-12' : ''}> {!emulator && <Skeleton width={350} height={50} count={1} />}
                            </div>


                            {emulator && (
                                <div className="px-2 my-8">


                                    <form onChange={(e) => setSearch(e.target.value)}>
                                        <input type="text" placeholder="Search Blog" className="py-2 pl-3 w-full p-2 mt-6 rounded-md text-lg" />
                                    </form>
                                </div>
                            )}

                            <div className={!emulator ? 'flex justify-center mt-14' : ''}>
                                {!emulator && <Skeleton width={260} height={40} count={1} />}
                            </div>


                            {emulator && (

                                <p className="text-center text-2xl font-bold italic py-6">{emulator}</p>
                            )}

                            <div>
                                <div className={!emulator ? 'flex justify-center mt-8' : ''}>
                                    {!emulator && <Skeleton width={260} height={40} className=" mt-5" count={6} />}
                                </div>

                            </div>

                            {emulator && (


                                <div className="flex justify-center">
                                    <div className="space-y-7">

                                        <Button className="w-full" onClick={() => btnClicked('Food')} outline gradientDuoTone="purpleToBlue">
                                            <span className="px-16 text-lg w-full">Food</span>
                                        </Button>

                                        <Button className="w-full" onClick={() => btnClicked('Travel')} outline gradientDuoTone="purpleToBlue">
                                            <span className="px-16 text-lg">Travel</span>
                                        </Button>
                                        <Button className="w-full" onClick={() => btnClicked('Technology')} outline gradientDuoTone="purpleToBlue">
                                            <span className="px-16 text-lg ">Technology</span>
                                        </Button>
                                        <Button className="w-full" onClick={() => btnClicked('Crafts')} outline gradientDuoTone="purpleToBlue">
                                            <span className="px-16 text-lg">Crafts</span>
                                        </Button>
                                        <Button className="w-full" onClick={() => btnClicked('Fitness')} outline gradientDuoTone="purpleToBlue">
                                            <span className="px-16 text-lg"> Fitness</span>
                                        </Button>
                                        <Button className="w-full" onClick={() => btnClicked('Fashion')} outline gradientDuoTone="purpleToBlue">
                                            <span className="px-16 text-lg">Fashion</span>
                                        </Button>
                                    </div>
                                </div>
                            )}


                        </div>


                    </div>

                    <div className=" col-span-9 lg:col-span-7">
                        <div className="max-w-screen-xl mx-auto flex justify-end pr-5 lg:pr-0 mt-4"><button onClick={btnReload} className="text-xl btn-circle btn"><TfiReload /></button></div>


                        <div className="drawer-content flex flex-col items-center justify-center  lg:hidden relative">
                            {/* Page content here */}
                            <label htmlFor="my-drawer-2" className="absolute left-4 bottom-4 btn btn-outline  drawer-button lg:hidden text-2xl"><SlDrawer /></label>
                            <div className="w-full px-3 pl-28 my-4">
                                <form onChange={(e) => setSearch(e.target.value)}>
                                    <input type="text" placeholder="Search Blog" className="py-2 pl-3 w-full p-2 mt-6 rounded-md text-lg" />
                                </form>
                            </div>

                        </div>

                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 p-5">
                            {
                                filterData.filter(item => {
                                    return item.title.toLowerCase().includes(search.toLowerCase())
                                }).slice(0, blogCount).map(data => <ALlBlogsShow key={data._id} blogs={data}></ALlBlogsShow>)
                            }
                        </div>

                        <div className={filterData.length < 13 ? 'hidden' : ''}>
                            <div className={blogCount === filterData?.length ? 'hidden' : ''}>

                                <div className="flex justify-center py-8">
                                    <button onClick={() => setBlogCount(filterData?.length)}
                                        className="middle btn text-white bg-green-500 none center text-lg rounded-lg py-2 px-14 font-medium transition-all" > See All </button>
                                </div>
                            </div>
                        </div>


                    </div>
                </div>

            </div>

            <div className="drawer lg:drawer-open block lg:hidden">
                <input id="my-drawer-2" type="checkbox" className="drawer-toggle" />

                <div className="drawer-side">
                    <label htmlFor="my-drawer-2" aria-label="close sidebar" className="drawer-overlay"></label>
                    <ul className="menu  pt-28 w-80 min-h-full bg-base-200 text-black">

                    </ul>
                    <p className="text-center pt-28 text-2xl font-bold italic py-6 pl-20">Select Category</p>
                    <div className=" pt-40 pl-24">
                        <div className="space-y-7">

                            <Button className="w-40" onClick={() => btnClicked('Food')} outline gradientDuoTone="purpleToBlue">
                                <span className=" ">Food</span>
                            </Button>

                            <Button className="w-40" onClick={() => btnClicked('Travel')} outline gradientDuoTone="purpleToBlue">
                                <span className=" ">Travel</span>
                            </Button>
                            <Button className="w-40" onClick={() => btnClicked('Technology')} outline gradientDuoTone="purpleToBlue">
                                <span className="  ">Technology</span>
                            </Button>
                            <Button className="w-40" onClick={() => btnClicked('Crafts')} outline gradientDuoTone="purpleToBlue">
                                <span className=" ">Crafts</span>
                            </Button>
                            <Button className="w-40" onClick={() => btnClicked('Fitness')} outline gradientDuoTone="purpleToBlue">
                                <span className=" "> Fitness</span>
                            </Button>
                            <Button className="w-40" onClick={() => btnClicked('Fashion')} outline gradientDuoTone="purpleToBlue">
                                <span className=" ">Fashion</span>
                            </Button>
                        </div>
                    </div>

                </div>
            </div>
        </div>
    );
};

export default AllBlogs;