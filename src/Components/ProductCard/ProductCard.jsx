import Swal from "sweetalert2";
import useAuth from "../../hooks/useAuth";
import { useLocation, useNavigate } from "react-router-dom";
import useAxiosSecure from "../../hooks/useAxiosSecure";
import useCart from "../../hooks/useCart";




const ProductCard = ({ item }) => {
    console.log(item)
    const { _id, image, Price, title } = item;

    const {user} = useAuth()
    const navigate = useNavigate()
    const location = useLocation();
    const axiosSecure = useAxiosSecure()

    const [,refetch] = useCart()

    
    const handleAddToCart = item  => {


       if(user && user.email){
        //todo
        
        console.log(user.email,item)

        const cartItem = {
            productId : _id,
            email:user.email,
            title,
            image,
            Price,
        }

       axiosSecure.post('/carts',cartItem)
        .then( res => {
            console.log(res.data)
            if(res.data.insertedId){
                Swal.fire({
                    position: "top-end",
                    icon: "success",
                    title: `${title} added to cart`,
                    showConfirmButton: false,
                    timer: 1500
                  });

                  refetch()
            }
        })



       }
       else{
        Swal.fire({
            title: "You are not Logged In  ?",
            text: "Plese login to add to the cart!",
            icon: "warning",
            showCancelButton: true,
            confirmButtonColor: "#3085d6",
            cancelButtonColor: "#d33",
            confirmButtonText: "Yes, login"
          }).then((result) => {
            if (result.isConfirmed) {

                // send the user to the  login page 

                navigate('/login',{state:{from:location}})

             
            }
          });
       }


    }
    return (
        <div>
            <div className="card w-96 rounded-none border border-indigo-600">
                    <figure className="">
                        <img src={image} alt="Shoes" className=" w-[400px] h-[200px]" />
                    </figure>
                    <div className="card-body items-center text-center">
                        <h2 className="card-title">{title}</h2>
                        <p>${Price}</p>
                        <div className="card-actions">
                            <button onClick={() => handleAddToCart(item)} className="btn btn-outline border-0 border-b-4 mt-4">AddtoCard</button>
                        </div>
                    </div>
                </div>
        </div>
    );
};

export default ProductCard;