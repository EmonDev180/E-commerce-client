
import Navber from "../../Components/Navber/Navber";
import Banner from "./Banner/Banner";
import CateoryItems from "./CategoryItems/CateoryItems";
import CategoryProduct from "./CategoryProduct/CategoryProduct";
import NewsLetter from "./NewsLetter/NewsLetter";
import PopularProduct from "./popularProduct/popularProduct";




const Home = () => {
    return (
        <div>
           <Navber></Navber>
            <Banner></Banner>
            <CategoryProduct></CategoryProduct>
            <CateoryItems></CateoryItems>
          
            <PopularProduct></PopularProduct>
            <NewsLetter></NewsLetter>
           
         
        </div>
    );
};

export default Home;