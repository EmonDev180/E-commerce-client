
import { useForm } from 'react-hook-form';
import { FaUtensils } from 'react-icons/fa';
import useAxiosPublic from './../../../hooks/useAxiosPublic';
import useAxiosSecure from '../../../hooks/useAxiosSecure';
import Swal from 'sweetalert2';







const image_hosting_key = import.meta.env.VITE_IMAGE_HOSTING_KEY
const image_hosting_api = `https://api.imgbb.com/1/upload?key=${image_hosting_key}`;

const AddProduct = () => {

    const { register, handleSubmit,reset } = useForm();

    const axiosPublic = useAxiosPublic();
    const axiosSecure = useAxiosSecure()


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

                title:data.name,
                category:data.category,
                Price:parseFloat(data.Price),
                recipe:data.product,
                image:res.data.data.display_url

            }
            //

            const productRes = await axiosSecure.post('/products',ProductItems);

            console.log(productRes.data)
            if(productRes.insertedId){

                reset();

                Swal.fire({
                    position: "top-end",
                    icon: "success",
                    title: `${data.name} is added to the product`,
                    showConfirmButton: false,
                    timer: 1500
                  });



            }

        }

    }


    return (
        <div>
           
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
                                <option value="tshart">T-shart</option>

                            </select>
                        </label>




                        {/* price  */}


                        <label className="form-control w-full my-6">
                            <div className="label">
                                <span className="label-text">Price*</span>

                            </div>
                            <input type="number"
                                placeholder="Price"
                                {...register('Price')}
                                className="input input-bordered w-full " />

                        </label>

                  

                        
                    </div>

                          {/* product  details   */}


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
                        Add Items <FaUtensils
                        ></FaUtensils>
                    </button>
                </form>
            </div>
        </div>
    );
};

export default AddProduct;