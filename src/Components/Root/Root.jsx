import { Outlet } from "react-router-dom";
import NavigationBar from "../Navbar/Navbar";
import FooterSection from "../Footer/FooterSection";

const Root = () => {
    return (
        <div>
          <NavigationBar/>
            <Outlet></Outlet>
            <FooterSection/>
        </div>
    );
};

export default Root;