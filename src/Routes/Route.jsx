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
            element: <AllBlogs/>,
            loader: ()=>fetch(`http://localhost:5000/api/v1/blogs`)
        },
        {
            path: "/blogDetails/:id",
            element: <BlogDetails/>,
            loader: ({params})=> fetch(`http://localhost:5000/api/v1/blogs/${params.id}`)
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