

const PopularProductCard = ({item}) => {

    const {_id,image,Price,title,category} = item;
    return (
        <div className="card w-72   rounded-none">
        <figure className="">
            <img src={image} alt="Shoes" className=" w-[300px] h-[200px]" />
        </figure>
        <div className="card-body items-center text-center">
            <h2 className="card-title">{title}</h2>
           
           
        </div>
    </div>
    );
};

export default PopularProductCard;