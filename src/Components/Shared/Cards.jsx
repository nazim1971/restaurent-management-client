
import Swal from "sweetalert2";
import useAuth from "../Hooks/useAuth";
import { useLocation, useNavigate } from "react-router-dom";
import useAxiosSequre from "../Hooks/useAxiosSequre";
import useCarts from "../Hooks/useCarts";


const Cards = ({i}) => {
  const {price, _id, category, recipe,name,image} = i
  const navigate = useNavigate()
  const location = useLocation()
  const {user} = useAuth()
  const axiosSequre = useAxiosSequre()
  const [, refetch] = useCarts()

  const handleAddtoCart = food =>{
    
    if(user && user.email){
// console.log(user.email ,food);

      const cartItem ={
        menuId: _id ,
        email: user.email,
        name,
        image, price,
      }
      axiosSequre.post('/carts', cartItem)
      .then(res=>{
        console.log(res.data);
        if(res.data.insertedId ){
          Swal.fire({
            position: "center",
            icon: "success",
            title: `${name} Added to your cart`,
            showConfirmButton: false,
            timer: 1500
          });
          // refetch the card
          //to update the card count
          refetch()
        }
      })
       
    }
    else{
      Swal.fire({
        title: "You are not login",
        text: "Please login to add to the cart!",
        icon: "warning",
        showCancelButton: true,
        confirmButtonColor: "#3085d6",
        cancelButtonColor: "#d33",
        confirmButtonText: "Yes, Login"
      }).then((result) => {
        if (result.isConfirmed) {
          // Swal.fire({
          //   title: "Deleted!",
          //   text: "Your file has been deleted.",
          //   icon: "success"
          // });
          navigate('/login', {state: {from: location }})
        }
      });
    }
  }
    return (
        <div>
        <div className="card  bg-base-100 shadow-xl">
          <figure>
            <img
              src={image}
              alt="Shoes"
            />
          </figure>
          <div className="card-body">
            <h2 className="card-title">{name} </h2>
            <p>{recipe} </p>
            <p>{category} </p>
            <p className="text-orange-500" >{price} </p>
            <div className=" justify-end">
              <button 
              onClick={handleAddtoCart}
              className="btn btn-outline text-orange-500 hover:bg-red-600 important ">Add to cart</button>
            </div>
          </div>
        </div>
      </div>
    );
};

export default Cards;