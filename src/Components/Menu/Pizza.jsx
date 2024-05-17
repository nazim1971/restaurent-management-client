import { Link } from "react-router-dom";
import Cover from "../Shared/Cover";
import MenuItem from "../Shared/MenuItem";


const Pizza = ({pizza}) => {
    return (
        <div>
            <div className="my-12">
            <Cover img={('https://i.ibb.co/CB2ZmgB/da-2.jpg')} text={'Pizza'}/>
            </div>
            <div className="grid grid-cols-2 gap-5">
        {
            pizza.slice(0,7).map(i=> <MenuItem key={i._id} item={i}></MenuItem>)
        }
      </div>
      <Link to={`/orderFood/pizza`} className="flex justify-center my-5" > <button className="btn  ">Order Now</button> </Link>
        </div>
    );
};

export default Pizza;