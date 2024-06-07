
import slide1 from '../../../assets/images/slider-bg.jpg'
import { Carousel } from 'react-responsive-carousel';
import "react-responsive-carousel/lib/styles/carousel.min.css";


const Banner = () => {
    return (

        <Carousel>
            <div>
                <img src={slide1} />
            </div>
            <div>
                <img src={slide1} />
            </div>
            <div>
                <img src={slide1} />
            </div>

         
           
        </Carousel>





    );
};

export default Banner;