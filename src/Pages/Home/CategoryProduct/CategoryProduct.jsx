import SectionTitle from "../../../Components/SectionTitle/SectionTitle";
import category1 from '../../../assets/images/category/category_1.png'
import category2 from '../../../assets/images/category/category_3.png'
import category3 from '../../../assets/images/category/category_4.png'
import category4 from '../../../assets/images/category/category_6.png'

import category6 from '../../../assets/images/category/category_8.png'


const CategoryProduct = () => {
    return (
        <section>
            <SectionTitle
                heading={'Our Category'}
                subHeading={'Best category'}

            >
            </SectionTitle>


            <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4 justify-items-center">
                <div className=" p-2 flex flex-col items-center">
                    <img src={category1} alt="Handbags" className="w-full h-auto" />
                    <p className="text-center mt-2">Handbags</p>
                </div>
                <div className=" p-2 flex flex-col items-center">
                    <img src={category2} alt="Shirts" className="w-full h-auto" />
                    <p className="text-center mt-2">Shirts</p>
                </div>
                <div className=" p-2 flex flex-col items-center">
                    <img src={category3} alt="Watch" className="w-full h-auto" />
                    <p className="text-center mt-2">Watch</p>
                </div>
                <div className=" p-2 flex flex-col items-center">
                    <img src={category4} alt="Shoes" className="w-full h-auto" />
                    <p className="text-center mt-2">Shoes</p>
                </div>
                <div className=" p-2 flex flex-col items-center">
                    <img src={category6} alt="T-shirt" className="w-full h-auto" />
                    <p className="text-center mt-2">T-shirt</p>
                </div>
            </div>



        </section>
    );
};

export default CategoryProduct;