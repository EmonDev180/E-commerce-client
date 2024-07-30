import { useQuery } from "@tanstack/react-query";
import useAxiosPublic from "../hooks/useAxiosPublic";
import SectionTitle from "./SectionTitle/SectionTitle";
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation } from 'swiper/modules';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import { Rating } from "@smastrom/react-rating";

import '@smastrom/react-rating/style.css'


const ReviewSection = () => {
    const axiosPublic = useAxiosPublic()
    const { data: reviews } = useQuery({
        queryKey: ['reviews'],
        queryFn: async () => {

            const res = await axiosPublic.get('/reviews')
            return res.data

        }


    })
    return (
        <section className="my-2">
            <SectionTitle heading={'Testinuals'} subHeading={'reveiw Section'}></SectionTitle>


            <Swiper navigation={true} modules={[Navigation]} className="mySwiper">

                {
                    reviews?.map(review => <SwiperSlide key={review._id}>
                        <div className=" flex flex-col items-center m-24">
                            <Rating
                                style={{ maxWidth: 180 }}
                                value={review.rating}
                                readOnly
                            />
                            <p>{review.details}</p>
                            <h3 className="text-3xl">{review.name}</h3>
                        </div>
                    </SwiperSlide>)
                }
            </Swiper>





        </section >
    );
};

export default ReviewSection;