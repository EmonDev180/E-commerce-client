
import ProductCard from '../ProductCard/ProductCard';

const OrderTab = ({items}) => {
    return (
        <div className='grid lg:grid-cols-3 md:grid-cols-2 sm-grid-cols-1 ml-12 gap-4 h-full'>
            {
                items?.map(item => <ProductCard key={item._id} item={item}></ProductCard>)
            }
        </div>
    );
};

export default OrderTab;