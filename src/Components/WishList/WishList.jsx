/* eslint-disable no-unused-vars */
import { Link, useLoaderData } from "react-router-dom";
import useAuth from "../../useAuth/useAuth";
import { useEffect, useState } from "react";
import DataTable from "react-data-table-component";
import axios from "axios";
import Swal from "sweetalert2";
// import DataTable from "react-data-table-component";

const WishList = () => {
    const { user } = useAuth();
    const wishList = useLoaderData();
    const [userWishList, setUserWishList] = useState([]);


    useEffect(() => {
        const matchWishes = wishList?.filter(data => data?.email === user?.email);
        setUserWishList(matchWishes);
    }, [user?.email, wishList])

    const handleDelete = (id) => {
        console.log(id);
        Swal.fire({
            title: 'Are you sure?',
            text: "You won't be able to revert this!",
            icon: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#3085d6',
            cancelButtonColor: '#d33',
            confirmButtonText: 'Yes, delete it!'
        }).then((result) => {
            if (result.isConfirmed) {

                axios.delete(`http://localhost:5000/api/v1/wishList/${id}`)
                    .then(res => {
                        const data = res.data;
                        console.log(data);
                        if (data.deletedCount > 0) {
                            Swal.fire(
                                'Deleted!',
                                'Your file has been deleted.',
                                'success'
                            )
                        }
                        window.location.reload(false);
                      

                    })
            }
        })

    }


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
            cell: row => <Link to={`/blogDetails/${row.id}`}><button className="btn btn-outline btn-info btn-sm rounded-sm">Details</button></Link>
        },
        {
            name: 'Action',
            cell: row => <button onClick={()=>handleDelete(row._id)} className="btn btn-circle">X</button>
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