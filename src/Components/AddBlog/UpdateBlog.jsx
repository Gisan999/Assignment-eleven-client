import { useLoaderData } from 'react-router-dom';
// import useAuth from '../../useAuth/useAuth';
import './AddBlog.css'
import axios from 'axios';
import Swal from 'sweetalert2';

const UpdateBlog = () => {
    const blogs = useLoaderData();
    // const { user } = useAuth();
    // console.log(user);
    // const { displayName, photoURL } = user

    const handleAddBlog = event => {
        event.preventDefault();
        const form = event.target;
        const title = form.title.value;
        const img = form.photo.value;
        const category = form.category.value;
        const shortDescription = form.short.value;
        const longDescription = form.long.value;
        const updateBlogData = { title, img, category, shortDescription, longDescription }
        // console.log(blogData)

        axios.put(`https://assignment-eleven-server-peach.vercel.app/api/v1/blogs/${_id}`, updateBlogData)
        .then(res => {
            const data = res.data;
            console.log(data);
            if(data.modifiedCount > 0){
                Swal.fire({
                    position: 'center',
                    title:'Blog updated successfully',
                    icon: 'success',
                    showConfirmButton: false,
                    timer: 2000
                })
            }
        })

       

    }

    const  { title, img, category, shortDescription, longDescription, _id } = blogs

    return (
        <div style={{
            backgroundImage: `url('https://images.pexels.com/photos/4555526/pexels-photo-4555526.jpeg?auto=compress&cs=tinysrgb&w=1600')`,
            backgroundSize: 'cover',
            backgroundRepeat: 'no-repeat',
            backgroundPosition: 'center',
        }} className="backdrop-blur-sm">

            <div className="max-w-screen-xl mx-auto bg-black bg-opacity-40">
                <div className="w-full h-full backdrop-blur-md pb-24 p-8">
                    <form onSubmit={handleAddBlog} className="p-5 space-y-12">
                        <h2 className='text-white font-extrabold text-center text-5xl py-12 font-serif uppercase effect tracking-widest'>Add Your Blog Here</h2>
                        <div className="relative z-0 w-full mb-6 group">
                            <input type="text" defaultValue={title} name="title" id="floating_email" className="block py-2.5 px-0 w-full text-base text-white bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer" placeholder=" " required />
                            <label htmlFor="floating_email" className="peer-focus:font-medium absolute text-base text-white 400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">Blog Title</label>
                        </div>
                        <div className="relative z-0 w-full mb-6 group">
                            <input type="text" defaultValue={img} name="photo" id="floating_password" className="block py-2.5 px-0 w-full text-base text-white bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer" placeholder=" " required />
                            <label htmlFor="floating_password" className="peer-focus:font-medium absolute text-base text-white dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">Photo URL</label>
                        </div>
                        <div className="relative z-0 w-full mb-6 group">

                            {/* <input type="password" name="repeat_password" id="floating_repeat_password" className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer" placeholder=" " required /> */}

                            <select defaultValue={category} required name='category' className=" pl-0 w-full block text-base text-white bg-transparent border-0 border-b-2 border-gray-300">
                                <option value="" selected>Select Category</option>
                                <option className='text-black' value="Food">Food</option>
                                <option className='text-black' value="Travel">Travel</option>
                                <option className='text-black' value="Technology">Technology</option>
                                <option className='text-black' value="Crafts">Crafts</option>
                                <option className='text-black' value="Fitness">Fitness</option>
                                <option className='text-black' value="Fashion">Fashion</option>
                            </select>


                            {/* <label htmlFor="floating_repeat_password" className="peer-focus:font-medium absolute text-base text-white dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">Confirm password</label> */}
                        </div>
                        <div className="grid md:grid-cols-2 md:gap-6">
                            <div className="relative z-0 w-full mb-6 group">
                                <textarea defaultValue={shortDescription} type="text" name="short" id="floating_first_name" className="block py-2.5 px-0 w-full text-base text-white bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer" placeholder=" " required />
                                <label htmlFor="floating_first_name" className="peer-focus:font-medium absolute text-base text-white dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">Short Description</label>
                            </div>
                            <div className="relative z-0 w-full mb-6 group">
                                <textarea defaultValue={longDescription} type="text" name="long" id="floating_last_name" className="block py-2.5 px-0 w-full text-base text-white bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer" placeholder=" " required />
                                <label htmlFor="floating_last_name" className="peer-focus:font-medium absolute text-base text-white dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">Long Description</label>
                            </div>
                        </div>

                        <button type="submit" className="w-full bg-blue-400 py-3 rounded-sm font-semibold text-white text-base hover:bg-blue-800">Update</button>
                    </form>
                </div>
            </div>

        </div>
    );
};

export default UpdateBlog;