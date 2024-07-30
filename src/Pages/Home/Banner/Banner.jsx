
import slide1 from '../../../assets/images/slider-bg.jpg'
import slide2 from '../../../assets/images/slider-bg4.jpg'
import slide3 from '../../../assets/images/slider-bg5.jpg'
import { Carousel } from 'react-responsive-carousel';
import "react-responsive-carousel/lib/styles/carousel.min.css";


const Banner = () => {
    return (

        <div>
        <Carousel>
            <div>
                <img src={slide1} />
              
              
            </div>
            <div>
                <img src={slide2} />
            
            </div>
            <div>
               <img src={slide3} alt="" />
               
            </div>

            
        </Carousel>
    </div>





    );
};

export default Banner;