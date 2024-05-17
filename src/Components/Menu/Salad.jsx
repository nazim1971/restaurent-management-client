import { Link } from "react-router-dom";
import Cover from "../Shared/Cover";
import MenuItem from "../Shared/MenuItem";


const Salad = ({salad}) => {
    return (
        <div>
            <div className="my-12">
            <Cover img={('https://i.ibb.co/CB2ZmgB/da-2.jpg')} text={'Salad'}/>
            </div>
            <div className="grid grid-cols-2 gap-5">
        {
            salad.slice(0,9).map(i=> <MenuItem key={i._id} item={i}></MenuItem>)
        }
      </div>
      <Link to={`/orderFood/salad`} className="flex justify-center my-5" > <button className="btn  ">Order Now</button> </Link>
        </div>
    );
};

export default Salad;