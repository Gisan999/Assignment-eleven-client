/* eslint-disable no-unused-vars */
import { useLoaderData } from "react-router-dom";
import useAuth from "../../useAuth/useAuth";
import { useEffect, useState } from "react";
import DataTable from "react-data-table-component";
// import DataTable from "react-data-table-component";

const WishList = () => {
    const { user } = useAuth();
    const wishList = useLoaderData();
    const [userWishList, setUserWishList] = useState([]);


    useEffect(() => {
        const matchWishes = wishList?.filter(data => data?.email === user?.email);
        setUserWishList(matchWishes);
    }, [user?.email, wishList])


    const columns = [
        {
            name: 'Category',
            selector: row => row.category,
            sortable: true
        },
        {
            name: 'Image',
            selector: row => <img className="w-40 h-20 my-5 " src={row.img} />
        },
        {
            name: 'Title',
            selector: row => <p className="font-semibold">{row.title}</p>
        },
        {
            name: 'Description',
            selector: row => row.shortDescription
        },
        {
            name: 'Details',
            cell: row => <button className="btn btn-outline btn-info btn-sm rounded-sm">Details</button>
        },
        {
            name: 'Action',
            cell: row => <button className="btn btn-circle">X</button>
        }
    ]


    return (
        <div className="container mx-auto mt-12">

            <DataTable title="Wish List"
            columns={columns}
            data={userWishList}
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

export default WishList;