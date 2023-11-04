import { Outlet } from "react-router-dom";
import NavigationBar from "../Navbar/Navbar";

const Root = () => {
    return (
        <div>
          <NavigationBar/>
            <Outlet></Outlet>
        </div>
    );
};

export default Root;