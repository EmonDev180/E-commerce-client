
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';

import Cover from '../../../Shared/Cover/Cover';

import banner1 from '../../../assets/images/category/banner1.jpg'

import { useState } from 'react';
import useProduct from '../../../hooks/useProduct';

import OrderTab from '../../../Components/Order/OrderTab';

const Shop = () => {
    const [tabIndex, setTableIndex] = useState(0)
    const [product] = useProduct();


    const HomeKitchen = product?.filter(item => item.category === 'Home & Kitchen')

    const Groceries = product?.filter(item => item.category === 'Groceries')
    const Electronics = product?.filter(item => item.category === 'Electronics')
    const Furniture = product?.filter(item => item.category === 'Furniture')
    const Outdoors = product?.filter(item => item.category === 'Outdoors')
    const HandBags = product?.filter(item => item.category ==='HandBags' )
    const tShart = product?.filter(item => item.category ==='T-shart' )



    // const Electronics = product?.filter(item => item.category ==='Electronics ')
    // const Furniture = product?.filter(item => item.category ==='Furniture')
    // const Outdoors = product?.filter(item => item.category ==='Outdoors')
    return (
        <div className='container mx-auto  '>
            
            <Cover img={banner1}></Cover>
   

            <Tabs defaultIndex={tabIndex} onSelect={(index) => setTableIndex(index)}>
                <TabList classID='flex flex-wrap justify-center gap-2 md:gap-4 lg:gap-6' >
                    <Tab>Groceries</Tab>
                    <Tab>Home & Kitchen</Tab>
                    <Tab>Electronics</Tab>
                    <Tab>Furniture</Tab>
                    <Tab> Outdoors</Tab>
                    <Tab>HandBags</Tab>
                    <Tab>T-shart</Tab>

                </TabList>
                <TabPanel className="p-2 md:p-4 lg:p-6">
                    <OrderTab items={Groceries}></OrderTab>
                </TabPanel>

                <TabPanel className='p-2 md:p-4 lg:p-6'>

                    <OrderTab items={HomeKitchen}></OrderTab>

                </TabPanel>
                <TabPanel className='p-2 md:p-4 lg:p-6'>

                    <OrderTab items={Electronics}></OrderTab>

                </TabPanel>
                <TabPanel className='p-2 md:p-4 lg:p-6'>
                    <OrderTab items={Furniture}></OrderTab>
                </TabPanel>

                <TabPanel className='p-2 md:p-4 lg:p-6'>
                    <OrderTab items={Outdoors}></OrderTab>
                </TabPanel>


                <TabPanel className='p-2 md:p-4 lg:p-6'>
                    <OrderTab items={HandBags}></OrderTab>
                </TabPanel>


                <TabPanel className="p-2 md:p-4 lg:p-6">
                    <OrderTab items={tShart}></OrderTab>
                </TabPanel>




            </Tabs>


        </div>
    );
};

export default Shop;