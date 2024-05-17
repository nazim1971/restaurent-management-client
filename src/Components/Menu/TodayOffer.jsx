import { Link } from "react-router-dom";
import MenuItem from "../Shared/MenuItem";
import Title from "../Shared/Title";

const TodayOffer = ({offer}) => {
    console.log(offer);
    return (
        <div>
            <Title title={"---Don't miss---"} subtitle={'TODAY OFFER'} />
            <div className="grid grid-cols-2 gap-5">
        {
            offer.map(i=> <MenuItem key={i._id} item={i}></MenuItem>)
        }
      </div>
      <Link className="flex justify-center my-5" > <button className="btn  ">Order Now</button> </Link>
        </div>
    );
};

export default TodayOffer;