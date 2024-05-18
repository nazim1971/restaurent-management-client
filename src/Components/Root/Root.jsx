import { Outlet, useLocation } from "react-router-dom";
import Footer from "../Shared/Footer";
import Navber from "../Shared/Navber";


const Root = () => {
    const location = useLocation();
    console.log(location);
    return (
        <div>
            <Navber/>
            <div className="w-[94%] mx-auto">
            <Outlet/>
            </div>
            <div className="">
            <Footer/>
            </div>
        </div>
    );
};

export default Root;