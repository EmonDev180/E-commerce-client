
import ReviewSection from "../../Components/ReviewSection";
import Banner from "./Banner/Banner";
import CateoryItems from "./CategoryItems/CateoryItems";
import CategoryProduct from "./CategoryProduct/CategoryProduct";
import NewsLetter from "./NewsLetter/NewsLetter";
import PopularProduct from "./popularProduct/popularProduct";




const Home = () => {
    return (
        <div>
        
            <Banner></Banner>
            <CategoryProduct></CategoryProduct>
            <CateoryItems></CateoryItems>
            <PopularProduct></PopularProduct>
            <ReviewSection></ReviewSection>
            <NewsLetter></NewsLetter>
           
         
        </div>
    );
};

export default Home;