import { FaAd, FaCalendar, FaHome, FaList,  FaShoppingBag, FaUser, } from "react-icons/fa";
import { FaShop } from "react-icons/fa6";
import { NavLink, Outlet } from "react-router-dom";
import useCart from "../../hooks/useCart";
import useAdmin from "../../hooks/useAdmin";


const DashBoard = () => {
    const [cart] = useCart()

    const [isAdmin] = useAdmin();

    return (
        <div className="flex flex-col md:flex-row">
            <div className="w-full md:w-64 min-h-screen bg-orange-500">
                <ul className="menu p-4 text-xl gap-4">

                    {
                        isAdmin ? <>

                            <li>

                                <NavLink to='/dashboard/adminHome'>
                                    <FaHome></FaHome>

                                    Admin   Home</NavLink>
                            </li>
                            <li>

                                <NavLink to='/dashboard/addProduct'>
                                    <FaCalendar></FaCalendar>

                                    AddProduct </NavLink>
                            </li>

                            <li>

                                <NavLink to='/dashboard/manageProduct'>
                                   <FaList></FaList>

                                    Manage Product</NavLink>
                            </li>
                          
                            <li>

                                <NavLink to='/dashboard/allUsers'>
                                   
                                        <FaUser></FaUser>
                                    All user</NavLink>
                            </li>


                        </>
                            :
                            <>

                                {/* user related  */}
                                <li>

                                    <NavLink to='/dashboard/userHome'>
                                        <FaHome></FaHome>

                                        User  Home</NavLink>
                                </li>
                                <li>

                                    <NavLink to='/dashboard/paymentHistory'>
                                        <FaCalendar></FaCalendar>

                                      paymentHistory </NavLink>
                                </li>

                                <li>

                                    <NavLink to='/dashboard/cart'>
                                        <FaShoppingBag></FaShoppingBag>

                                        My cart {cart.length}</NavLink>
                                </li>
                                <li>

                                    <NavLink to='/dashboard/review'>
                                        <FaAd></FaAd>

                                        Add a review </NavLink>
                                </li>
                                <li>

                                    <NavLink to='/dashboard/bookings'>
                                        <FaList></FaList>

                                        My Booking</NavLink>
                                </li>

                            </>
                    }

                    <div className="divider"></div>
                    {/* shared  */}

                    <li>

                        <NavLink to='/'>
                            <FaList></FaList>

                            User Home</NavLink>
                    </li>
                    <li>

                        <NavLink to='/shop'>
                            <FaShop></FaShop>

                            Shop</NavLink>
                    </li>



                </ul>

            </div>

            <div className="flex-1 p-8 ">
                <Outlet></Outlet>
            </div>
        </div>
    );
};

export default DashBoard;