import { useLoaderData } from "react-router-dom";


const AllBlogs = () => {
    const allData = useLoaderData();
    console.log(allData);
    return (
        <div>
         <div className="max-w-[1750px]  mx-auto">
            <div className="grid grid-cols-9 gap-5">
                <div className="border col-span-2"> olihjre f</div>
                <div className="border col-span-7"> olihjre f</div>
            </div>

         </div>
        </div>
    );
};

export default AllBlogs;