import { createBrowserRouter } from "react-router-dom";
import Root from "../Components/Root/Root";
import Home from "../Components/Home/Home";
import ErrorPage from "../Components/ErrorPage/ErrorPage";
import Login from "../Components/Login/Login";
import Registration from "../Components/Registration/Registration";

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