import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination } from 'swiper/modules';

import 'swiper/css';
import 'swiper/css/pagination';

import slider1 from '../../../assets/images/slider1.jpg'

import slider2 from '../../../assets/images/slider2.jpg'
import slider3 from '../../../assets/images/slider3.jpg'
import slider4 from '../../../assets/images/slider4.jpg'
import slider5 from '../../../assets/images/slider5.jpg'
import slider7 from '../../../assets/images/slider7.jpg'
import SectionTitle from '../../../Components/SectionTitle/SectionTitle';




const CateoryItems = () => {
    return (

        <section>
            <SectionTitle

            heading={'Our collection'}
            subHeading={'From ullimited service'}
            
            >

            </SectionTitle>
            <Swiper
                slidesPerView={3}
                spaceBetween={30}
                pagination={{
                    clickable: true,
                }}
                modules={[Pagination]}
                className="mySwiper mb-24"
            >
                <SwiperSlide>
                    <img src={slider1} alt="" />
                    <h3 className='text-3xl uppercase text-center text-white -mt-12'>product</h3>

                </SwiperSlide>

                <SwiperSlide>
                    <img src={slider2} alt="" />
                    <h3 className='text-3xl uppercase text-center text-white -mt-12'>product</h3>

                </SwiperSlide>

                <SwiperSlide>
                    <img src={slider3} alt="" />
                    <h3 className='text-3xl uppercase text-center text-white -mt-12'>product</h3>

                </SwiperSlide>

                <SwiperSlide>
                    <img src={slider4} alt="" />
                    <h3 className='text-3xl uppercase text-center text-white -mt-12'>product</h3>

                </SwiperSlide>

                <SwiperSlide>
                    <img src={slider5} alt="" />
                    <h3 className='text-3xl uppercase text-center text-white -mt-12'>product</h3>

                </SwiperSlide>


                <SwiperSlide>
                    <img src={slider7} alt="" />
                    <h3 className='text-3xl uppercase text-center text-white -mt-12'>product</h3>

                </SwiperSlide>



            </Swiper>
        </section>

    );
};

export default CateoryItems;