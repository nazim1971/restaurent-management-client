import { FaCalendar, FaHome, FaList, FaSearch, FaStar } from "react-icons/fa";
import { FaCartShopping } from "react-icons/fa6";
import { NavLink, Outlet } from "react-router-dom";
import useCarts from "../Hooks/useCarts";

const Dashboard = () => {
    const [cart] = useCarts()
  return (
    <div className="flex">
      <div className="w-64 min-h-screen  bg-orange-400">
        <ul className="menu p-4 text-white">
          <li >
            {" "}
            <NavLink to="/dashboard/cart">
            <FaCartShopping /> My cart ({cart.length})
                </NavLink> 
          </li>
          <li >
            {" "}
            <NavLink to="/dashboard/userHome">
            <FaHome /> User Home
                </NavLink> 
          </li>
          <li >
            {" "}
            <NavLink to="/dashboard/reservation">
            <FaCalendar /> Reservation
                </NavLink> 
          </li>
          <li >
            {" "}
            <NavLink to="/dashboard/review">
            <FaStar /> Review
                </NavLink> 
          </li>
          <li >
            {" "}
            <NavLink to="/dashboard/bookings"> <FaList /> My Bookings</NavLink> 
          </li>
          <div className="divider">OR</div>
          <li >
            {" "}
            <NavLink to="/"> <FaHome /> Home</NavLink> 
          </li>
          <li >
            {" "}
            <NavLink to="/menu"> <FaSearch /> Menu</NavLink> 
          </li>
        </ul>
      </div>
      {/* DashBoard side bar */}
      <div className="flex-1 m-8">
        <Outlet />
      </div>
    </div>
  );
};

export default Dashboard;
