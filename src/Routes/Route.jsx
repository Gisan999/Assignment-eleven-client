import { createBrowserRouter } from "react-router-dom";
import Root from "../Components/Root/Root";
import Home from "../Components/Home/Home";
import ErrorPage from "../Components/ErrorPage/ErrorPage";
import Login from "../Components/Login/Login";
import Registration from "../Components/Registration/Registration";
import AllBlogs from "../Components/AllBlogs/AllBlogs";
import BlogDetails from "../Components/BlogDetails/BlogDetails";
import AddBlog from "../Components/AddBlog/AddBlog";
import PrivateRoute from "../PrivateRoute/PrivateRoute";
import UpdateBlog from "../Components/AddBlog/UpdateBlog";
import WishList from "../Components/WishList/WishList";
import FeaturedBlogs from "../Components/FeaturedBlogs/FeaturedBligs";

const router = createBrowserRouter([
    {
      path: "/",
      element:<Root/>,
      errorElement: <ErrorPage></ErrorPage>,
      children: [
        {
            path: "/",
            element: <Home/>
        },
        {
            path: "/addBlog",
            element:<PrivateRoute> <AddBlog/></PrivateRoute>
        },
        {
            path: "/allBlog",
            element:<PrivateRoute><AllBlogs/></PrivateRoute>,
            loader: ()=>fetch(`https://assignment-eleven-server-peach.vercel.app/api/v1/blogs`)
        },
        {
            path: "/blogDetails/:id",
            element: <PrivateRoute><BlogDetails/></PrivateRoute>,
            loader: ({params})=> fetch(`https://assignment-eleven-server-peach.vercel.app/api/v1/blogs/${params.id}`)
        },
        {
            path: "/updateBlog/:id",
            element: <UpdateBlog/>,
            loader: ({params})=> fetch(`https://assignment-eleven-server-peach.vercel.app/api/v1/blogs/${params.id}`)
        },
        {
            path: "/wishList",
            element: <PrivateRoute><WishList/></PrivateRoute>,
           
        },
        {
            path: "/featuredBlogs",
            element: <PrivateRoute><FeaturedBlogs/></PrivateRoute>,
            loader: ()=>fetch(`https://assignment-eleven-server-peach.vercel.app/api/v1/feature`)
        },
        {
            path:"/login",
            element: <Login/>
        },
        {
            path:"/registration",
            element: <Registration/>
        }

      ]
    },
  ]);

  export default router;