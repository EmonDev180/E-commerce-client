import { Outlet } from "react-router-dom";
import Footer from "../../Shared/Footer";
import Navber from "../../Components/Navber/Navber";


const MainLayOut = () => {
    return (
        <div>
            
            <Navber></Navber>
            <Outlet></Outlet>
           
          
            <Footer></Footer>
         
        </div>
    );
};

export default MainLayOut;