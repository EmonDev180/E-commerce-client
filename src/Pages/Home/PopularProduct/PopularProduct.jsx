import { useEffect, useState } from "react";
import SectionTitle from "../../../Components/SectionTitle/SectionTitle";
import PopularProductCard from "./PopularProductCard";
import useProduct from "../../../hooks/useProduct";


const PopularProduct = () => {
    const [product]  = useProduct()

    const popular = product?.filter(item => item.category === 'Home & Kitchen')
    // const [product, setProduct] = useState()

    // useEffect(() => {
    //     fetch('/public/product.json')
    //         .then(res => res.json())
    //         .then(data => {
    //             const popularProduct = data.filter(item => item.category === 'Home & Kitchen')
    //             setProduct(popularProduct)
    //         })

    // }, [])
    return (
        <section className="mb-12">
            <SectionTitle
                heading={' Our product'}
                subHeading={'popular product'}

            >

            </SectionTitle>

            <div className="grid grid-cols-3 gap-10">
                {
                    popular?.map(item =><PopularProductCard key={item._id} item={item}></PopularProductCard> )
                }
            </div>
        </section>
    );
};

export default PopularProduct;