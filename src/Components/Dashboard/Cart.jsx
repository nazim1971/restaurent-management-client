import { MdDelete } from "react-icons/md";
import useCarts from "../Hooks/useCarts";
import Swal from "sweetalert2";
import useAxiosSequre from "../Hooks/useAxiosSequre";


const Cart = () => {
    const [cart , refetch] = useCarts();
    const axiosSequre = useAxiosSequre()
    const totalPrice = cart.reduce((total, item)=> total + item.price, 0);

    const handleDelete = e =>{
        Swal.fire({
            title: "Are you sure?",
            text: "You won't be able to revert this!",
            icon: "warning",
            showCancelButton: true,
            confirmButtonColor: "#3085d6",
            cancelButtonColor: "#d33",
            confirmButtonText: "Yes, delete it!"
          }).then((result) => {
            if (result.isConfirmed) {
          
            axiosSequre.delete(`/carts/${e}`)
            .then(res=>{
                if(res.data.deletedCount > 0){
                    refetch()
                    Swal.fire({
                        title: "Deleted!",
                        text: "Your file has been deleted.",
                        icon: "success"
                      });
                }
            })
            }
          });
    }
    return (
        <div>
           <div className="flex justify-between bg-slate-500 text-white p-3 rounded-xl">
           <h2 className="text-3xl">Items: {cart.length} </h2>
           <h2 className="text-3xl">Total price: $ <span className="text-yellow-400">{totalPrice}</span> </h2>
           <button className="btn">Pay</button>
           </div>

           <div className="overflow-x-auto">
  <table className="table">
    {/* head */}
    <thead>
      <tr>
        <th>
            #
        </th>
        <th>Image</th>
        <th>Name</th>
        <th>Price</th>
        <th>Action</th>
      </tr>
    </thead>
    <tbody>
      {/* row 1 */}
      {
        cart.map((i,idx)=> <tr key={i._id}>
            <th>
             {idx+1}
            </th>
            <td>
              <div className="flex items-center gap-3">
                <div className="avatar">
                  <div className="mask mask-squircle w-12 h-12">
                    <img src={i.image} alt="Avatar Tailwind CSS Component" />
                  </div>
                </div>
              </div>
            </td>
            <td>
                {i.name}
            </td>
            <td> ${i.price} </td>
            <th>
              <button onClick={()=> handleDelete(i._id)} className="btn btn-ghost btn-xs"> <MdDelete className="text-3xl text-red-600"/> </button>
            </th>
          </tr>)
      }

    </tbody>
    
  </table>
</div>
        </div>
    );
};

export default Cart;