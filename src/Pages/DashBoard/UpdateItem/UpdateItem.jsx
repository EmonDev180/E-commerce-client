import { useLoaderData } from "react-router-dom";
import SectionTitle from "../../../Components/SectionTitle/SectionTitle";


const UpdateItem = () => {

    const item = useLoaderData();

    console.log(item)




    return (
        <div>
            <SectionTitle heading={'update item'} subHeading={'refress info'}></SectionTitle>
            <h1>Update item</h1>
        </div>
    );
};

export default UpdateItem;