import { Outlet } from "react-router-dom";
import Footer from "../Shared/Footer";
import Navber from "../Shared/Navber";


const Root = () => {
    return (
        <div>
            <Navber/>
            <Outlet/>
            <div className="">
            <Footer/>
            </div>
        </div>
    );
};

export default Root;