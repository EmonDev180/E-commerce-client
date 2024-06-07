import { FaEdit, FaTrashAlt } from "react-icons/fa";
import SectionTitle from "../../../Components/SectionTitle/SectionTitle";
import useProduct from "../../../hooks/useProduct";
import Swal from "sweetalert2";

import useAxiosPublic from "../../../hooks/useAxiosPublic";
import { Link } from "react-router-dom";


const ManageProduct = () => {

    const [product] = useProduct()

    const axiosPublic = useAxiosPublic()

    const handleDelete = (item) => {
        Swal.fire({
            title: "Are you sure?",
            text: "You won't be able to revert this!",
            icon: "warning",
            showCancelButton: true,
            confirmButtonColor: "#3085d6",
            cancelButtonColor: "#d33",
            confirmButtonText: "Yes, delete it!"
        }).then(async (result) => {
            if (result.isConfirmed) {

                const res = await axiosPublic.delete(`/products/${item._id}`)

                console.log(res.data)


                //   Swal.fire({
                //     title: "Deleted!",
                //     text: "Your file has been deleted.",
                //     icon: "success"
                //   });
            }
        });



    }
    return (
        <div>
            <SectionTitle heading='Manage product' subHeading="" ></SectionTitle>
            <div>

                <div className="overflow-x-auto">
                    <table className="table">
                        {/* head */}
                        <thead>
                            <tr>
                                <th>
                                    #
                                </th>
                                <th>Image</th>
                                <th>Product Name</th>
                                <th>Price</th>
                                <th>Update</th>
                                <th>Delete</th>
                            </tr>
                        </thead>
                        <tbody>

                            {
                                product?.map((item, index) => <tr key={item._id}>
                                    <td>
                                        {index + 1}
                                    </td>
                                    <td>
                                        <div className="flex items-center gap-3">
                                            <div className="avatar">
                                                <div className="mask mask-squircle w-12 h-12">
                                                    <img src={item.image} alt="Avatar Tailwind CSS Component" />
                                                </div>
                                            </div>

                                        </div>
                                    </td>
                                    <td>
                                        {item.title}

                                    </td>
                                    <td>
                                        ${item.Price}
                                    </td>
                                    <td>
                                        <Link to={`/dashboard/updateItem/${item._id}`}>
                                            <button className="btn btn-ghost btn-lg">
                                                <FaEdit></FaEdit>
                                            </button>
                                        </Link>
                                    </td>
                                    <td>

                                        <button onClick={() => handleDelete(item)} className="btn btn-ghost btn-lg">
                                            <FaTrashAlt></FaTrashAlt>
                                        </button>


                                    </td>
                                </tr>
                                )}



                        </tbody>


                    </table>
                </div>



            </div>
        </div>
    );
};

export default ManageProduct;