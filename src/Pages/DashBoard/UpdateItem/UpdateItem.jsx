

import { useLoaderData } from "react-router-dom";
import SectionTitle from "../../../Components/SectionTitle/SectionTitle";
import { useForm } from "react-hook-form";
import Swal from "sweetalert2";
import useAxiosSecure from "../../../hooks/useAxiosSecure";
import useAxiosPublic from "../../../hooks/useAxiosPublic";

const image_hosting_key = import.meta.env.VITE_IMAGE_HOSTING_KEY
const image_hosting_api = `https://api.imgbb.com/1/upload?key=${image_hosting_key}`;
const UpdateItem = () => {


    const {_id,name,category,price}  = useLoaderData();

  

    const { register, handleSubmit,reset } = useForm();

    const axiosSecure = useAxiosSecure();


    const axiosPublic = useAxiosPublic();

    const onSubmit = async (data) => {
        console.log(data)

        const imageFile = {image :data.image[0]}

        const res = await axiosPublic.post(image_hosting_api,imageFile,{
            headers : {
                'Content-type': 'multipart/form-data'
            }
        })




        console.log(res.data);
        if(res.data.success){

            const ProductItems = {

                name:data.name,
                category:data.category,
                price:parseFloat(data.price),
                product:data.product,
                image:res.data.data.display_url

            }
            //

            const productRes = await axiosSecure.patch(`/products/${_id}`,ProductItems);

            console.log(productRes.data)
            if(productRes.modifiedCount > 0){

                // reset();

                Swal.fire({
                    position: "top-end",
                    icon: "success",
                    title: `${data.name} is updated  to the product`,
                    showConfirmButton: false,
                    timer: 1500
                  });



            }

        }

    }





  






    return (
        <div>
            <SectionTitle heading={'update item'} subHeading={'refress info'}></SectionTitle>
            <h1>Update item</h1>

            <div>
            <form onSubmit={handleSubmit(onSubmit)}>

<label className="form-control w-full my-6">
    <div className="label">
        <span className="label-text">Product Name*</span>

    </div>
    <input type="text"
        placeholder="Product Name"
        {...register('name')}
        
        className="input input-bordered w-full " />

</label>


{/* category  */}

<div className="flex gap-6">



    <label className="form-control w-full my-6">
        <div className="label">
            <span className="label-text">Category*</span>

        </div>
        <select defaultValue='default' {...register('category',{required: true})}
            className="select select-primary w-full ">
            <option disabled  value='default'>select a category?</option>
            <option value="Groceries">Groceries</option>
            <option value="Home & Kitchen">Home & Kitchen</option>
            <option value="Electronics">Electronics</option>
            <option value="Furniture">Furniture</option>
            <option value="Outdoors">Outdoors</option>
            <option value="HandBags">HandBags</option>


        </select>
    </label>




    {/* price  */}


    <label className="form-control w-full my-6">
        <div className="label">
            <span className="label-text">Price*</span>

        </div>
        <input type="number"
            placeholder="Price"
            {...register('price')}
            className="input input-bordered w-full " />

    </label>



    
</div>

      {/* recipee details   */}


<label className="form-control">
        <div className="label">
            <span className="label-text">Product Details</span>
          
        </div>
        <textarea {...register('product')} className="textarea textarea-bordered h-24" placeholder="Bio"></textarea>
        <div className="label">
            <span className="label-text-alt">Your bio</span>
            <span className="label-text-alt">Alt label</span>
        </div>
    </label>

    <div className="form-control w-full my-6">
    <input {...register('image')} type="file" className="file-input file-input-ghost w-full max-w-xs" />

    </div>

    










<button className="btn">
    Add Items 
    
</button>
</form>
            </div>
        </div>
    );
};

export default UpdateItem;