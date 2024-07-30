import { createBrowserRouter } from "react-router-dom";
import MainLayOut from "./LayOut/MainLayOut";
import Home from "../Pages/Home/Home";
import Shop from "../Pages/Shop/Shop/Shop";
import Login from "../Pages/Login/Login";
import Register from "../Pages/Register/Register";

import DashBoard from "./LayOut/DashBoard";
import Cart from "../Pages/DashBoard/cart/cart";
import Alluser from "../Pages/DashBoard/Alluser/Alluser";
import PrivateRoute from "./PrivateRoute/PrivateRoute";
import AddProduct from "../Pages/DashBoard/AddProduct/AddProduct";
import ManageProduct from "../Pages/DashBoard/ManageProduct/ManageProduct";

import UpdateItem from "../Pages/DashBoard/UpdateItem/UpdateItem";
import Payment from "../Pages/DashBoard/Payment/Payment";
import PaymentHistory from "../Pages/DashBoard/PaymentHistory/PaymentHistory";
import UserHome from "../Pages/DashBoard/UserHome/UserHome";
import AdminHome from "../Pages/DashBoard/AdminHome/AdminHome";
import About from "../Pages/About/About";
import Blog from "../Pages/Blog/Blog";


const router = createBrowserRouter([
    {
        path:'/',
        element:<MainLayOut></MainLayOut>,
        children: [
            {
              path: '/',
              element:<Home></Home>
            },
            {
              path:"/about",
              element:<About></About>
            },
            {
              path:'shop',
              element:<Shop></Shop>
            },
            {
              path:"/blog",
              element:<Blog></Blog>

            },

            {
              path:'login',
              element:<Login></Login>
            },
            {
              path:'register',
              element:<Register></Register>
            }


          ],
    },
    {
      path:'dashboard',
      element: <PrivateRoute><DashBoard></DashBoard></PrivateRoute>,
      children:[

        {
          path:"userHome",
          element:<UserHome></UserHome>

        },
        {
            path:'cart',
            element:<Cart></Cart>
        },

        {
            path:'payment',
            element:<Payment></Payment>
        },
        {
            path:'paymentHistory',
            element:<PaymentHistory></PaymentHistory>
        },







        {


          path:'adminHome',
          element:<AdminHome></AdminHome>

        },
        {
          path:'allusers',
          element:<Alluser></Alluser>
        },
        {
          path:'addProduct',
          element:  <AddProduct></AddProduct>
        },
        {
          path:"updateItem/:id",
          element:<UpdateItem></UpdateItem>,
          loader: ({params}) => fetch(`https://e-commerce-server-mauve.vercel.app/products/${params.id}`)
        
        },
        {
          path:"manageProduct",
          element:  <ManageProduct></ManageProduct>  
        },
       

      ]
    }
])

export default router;