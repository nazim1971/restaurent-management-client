import { useContext } from "react";
import { NavLink, useNavigate } from "react-router-dom";
import { AuthContext } from "../Provider/AuthProvider";
import { FaCartShopping } from "react-icons/fa6";
import useCarts from "../Hooks/useCarts";


const Navber = () => {
  const { user, logOut } = useContext(AuthContext);
  const navigate = useNavigate();
  const [cart] = useCarts()

  const handleSignOut = () => {
    logOut()
      .then(() => {
        navigate("/");
      })
      .catch();
  };

    const navOptions = <>
    <li> <NavLink to='/' > Home </NavLink> </li>
    <li> <NavLink> Contact-us </NavLink> </li>
    <li> <NavLink> Dashboard </NavLink> </li>
    <li> <NavLink to={'/dashboard/cart'}>
      <button  className="flex gap-2 items-center"> <FaCartShopping />
      <div className="badge badge-secondary">
        +{cart?.length}
      </div>
      </button>
      </NavLink> </li>
    <li> <NavLink to='/menu'> Our Menu </NavLink> </li>
    {
      user && <li> <NavLink to='/editProfile'> Edit Profiled </NavLink> </li>
    }
    <li> <NavLink to='/orderFood' > Order Food </NavLink> </li>
      {
        user ? <li> <NavLink onClick={handleSignOut}  > Logout</NavLink> </li> : 
        <>
        <li> <NavLink to='/login' > Login</NavLink> </li>
        <li> <NavLink to='/register' > Register</NavLink> </li>
         </>
      }
    
    </>

    return (
        <div className="">
            <div className="navbar fixed   max-w-screen-xl opacity-40  z-10 bg-black text-white">
  <div className="navbar-start">
    <div className="dropdown">
      <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
      </div>
      <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
       {navOptions}
      </ul>
    </div>
    <a className="btn btn-ghost text-xl">Bistro-Boss</a>
  </div>
  <div className="navbar-center hidden lg:flex">
    <ul className="menu menu-horizontal px-1">
      {navOptions}
    </ul>
  </div>
  <div className="navbar-end">
    <a className="btn">Button</a>
  </div>
</div>
        </div>
    );
};

export default Navber;