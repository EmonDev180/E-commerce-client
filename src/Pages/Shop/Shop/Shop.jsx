
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';
import Navber from '../../../Components/Navber/Navber';
import Cover from '../../../Shared/Cover/Cover';
import banner5 from '../../../assets/images/Banner5.jpg'
import { useState } from 'react';
import useProduct from '../../../hooks/useProduct';
import ProductCard from '../../../Components/ProductCard/ProductCard';
import OrderTab from '../../../Components/Order/OrderTab';

const Shop = () => {
    const [tabIndex, setTableIndex] = useState(0)
    const [product] = useProduct();


    const HomeKitchen = product?.filter(item => item.category === 'Home & Kitchen')

    const Groceries = product?.filter(item => item.category === 'Groceries')
    const Electronics = product?.filter(item => item.category === 'Electronics')
    const Furniture = product?.filter(item => item.category === 'Furniture')
    const Outdoors = product?.filter(item => item.category === 'Outdoors')




    // const Electronics = product?.filter(item => item.category ==='Electronics ')
    // const Furniture = product?.filter(item => item.category ==='Furniture')
    // const Outdoors = product?.filter(item => item.category ==='Outdoors')
    return (
        <div>
     
            <Cover img={banner5} title={'OUR SHOP'}></Cover>
            <Tabs defaultIndex={tabIndex} onSelect={(index) => setTableIndex(index)}>
                <TabList>
                    <Tab>Groceries</Tab>
                    <Tab>Home & Kitchen</Tab>
                    <Tab>Electronics</Tab>
                    <Tab>Furniture</Tab>
                    <Tab> Outdoors</Tab>

                </TabList>
                <TabPanel>
                    <OrderTab items={Groceries}></OrderTab>
                </TabPanel>

                <TabPanel>

                    <OrderTab items={HomeKitchen}></OrderTab>

                </TabPanel>
                <TabPanel>

                    <OrderTab items={Electronics}></OrderTab>

                </TabPanel>
                <TabPanel>
                    <OrderTab items={Furniture}></OrderTab>
                </TabPanel>

                <TabPanel>
                    <OrderTab items={Outdoors}></OrderTab>
                </TabPanel>




            </Tabs>


        </div>
    );
};

export default Shop;