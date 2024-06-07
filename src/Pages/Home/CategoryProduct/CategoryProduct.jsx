import SectionTitle from "../../../Components/SectionTitle/SectionTitle";
import category1 from '../../../assets/images/category/category_1.png'
import category2 from '../../../assets/images/category/category_3.png'
import category3 from '../../../assets/images/category/category_4.png'
import category4 from '../../../assets/images/category/category_6.png'
import category5 from '../../../assets/images/category/category_7.png'
import category6 from '../../../assets/images/category/category_8.png'


const CategoryProduct = () => {
    return (
        <section>
            <SectionTitle
                heading={'Our Category'}
                subHeading={'Best category'}

            >
            </SectionTitle>

            <div className="flex   justify-center gap-12">
                <div>

                    <img src={category1} alt="" />
                    <p className="text-center">Handbags</p>
                </div>
                <div>

                    <img src={category2} alt="" />
                    <p className="text-center">Handbags</p>
                </div>
                <div>

                    <img src={category3} alt="" />
                    <p className="text-center">Handbags</p>
                </div>
                <div>

                    <img src={category4} alt="" />
                    <p className="text-center">Handbags</p>
                </div>
                <div>

                    <img src={category5} alt="" />
                    <p className="text-center">Handbags</p>
                </div>

                <div>

                    <img src={category6} alt="" />
                    <p className="text-center">Handbags</p>
                </div>
            </div>
        </section>
    );
};

export default CategoryProduct;