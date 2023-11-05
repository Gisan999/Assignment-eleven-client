import { createBrowserRouter } from "react-router-dom";
import Root from "../Components/Root/Root";
import Home from "../Components/Home/Home";
import ErrorPage from "../Components/ErrorPage/ErrorPage";
import Login from "../Components/Login/Login";
import Registration from "../Components/Registration/Registration";
import AllBlogs from "../Components/AllBlogs/AllBlogs";
import BlogDetails from "../Components/BlogDetails/BlogDetails";
import AddBlog from "../Components/AddBlog/AddBlog";

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
            element: <AddBlog/>
        },
        {
            path: "/allBlog",
            element: <AllBlogs/>
        },
        {
            path: "/blogDetails",
            element: <BlogDetails/>
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