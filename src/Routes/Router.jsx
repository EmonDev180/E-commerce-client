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
import AdminRoute from "./AdminRoute/AdminRoute";
import UpdateItem from "../Pages/DashBoard/UpdateItem/UpdateItem";


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
              path:'shop',
              element:<Shop></Shop>
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
            path:'cart',
            element:<Cart></Cart>
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
          loader : ({params}) => fetch(`http://localhost:5000/products/${params.id}`)

        },
        {
          path:"manageProduct",
          element:  <ManageProduct></ManageProduct>  
        },
       

      ]
    }
])

export default router;