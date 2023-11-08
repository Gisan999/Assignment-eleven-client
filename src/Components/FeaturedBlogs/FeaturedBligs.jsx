// import { useEffect } from "react";
// import { useState } from "react";
import DataTable from "react-data-table-component";
import { useLoaderData } from "react-router-dom";


// let arr = [];
// let myCollection = [];

const FeaturedBlogs = () => {
    // const [featuredData, setFeaturedData] = useState([]);
    const allBlogs = useLoaderData();
    // const allData = allBlogs;
    console.log(allBlogs);
    // console.log(allBlogs[0]['shortDescription'].length);



    const columns = [
        {
            name: 'Serial',
            selector: (row, idx) => <p className="font-bold">{idx + 1}</p>,

        },
        {
            name: 'Owner',
            selector: row => row.userName,
            sortable: true
        },
        {
            name: 'Image',
            selector: row => <img className="w-24 h-24 rounded-full my-5 " src={row.userImg} />
        },
        {
            name: 'Title',
            selector: row => <p className="font-semibold">{row.title}</p>
        },
        {
            name: 'Description',
            selector: row => row.shortDescription.slice(0, 40)
        },

    ]

    return (
        <div className="container mx-auto mt-12">

            <DataTable title="Featured Blogs"
                columns={columns}
                data={allBlogs}
                pagination
                fixedHeader
                fixedHeaderScrollHeight="550px"
                selectableRows
                selectableRowsHighlight
                highlightOnHover
            >
            </DataTable>



        </div>
    );
};

export default FeaturedBlogs;