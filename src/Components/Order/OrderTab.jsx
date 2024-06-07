
import ProductCard from '../ProductCard/ProductCard';

const OrderTab = ({items}) => {
    return (
        <div className='grid grid-cols-3 gap-4 h-full'>
            {
                items?.map(item => <ProductCard key={item._id} item={item}></ProductCard>)
            }
        </div>
    );
};

export default OrderTab;