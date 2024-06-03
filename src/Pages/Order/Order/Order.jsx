import Cover from '../../Shared/Cover/Cover';
import orderCover from '../../../assets/shop/banner2.jpg';
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';
import useMenu from '../../../hooks/useMenu';
import OrderTabs from '../OrderTabs/OrderTabs';
import { useParams } from 'react-router-dom';
import { useState } from 'react';

const Order = () => {
    const categories = ['salad','pizza','soup','dessert','drinks'];
    const category = useParams();
    // console.log(category)
    const initialIndex = categories.indexOf(category);
    console.log(initialIndex)
    const[tabIndex, setTabIndex] = useState(initialIndex)
    const [menu] = useMenu();
    const dessert = menu.filter(item=>item.category === 'dessert');
    const salad = menu.filter(item=>item.category === 'salad');
    const pizza = menu.filter(item=>item.category === 'pizza');
    const soup = menu.filter(item=>item.category === 'soup');
    const drinks = menu.filter(item=>item.category === 'drinks');
    return (
        <div>
            <Cover img={orderCover} title={"Our Shop"}></Cover>
            <Tabs defaultIndex={tabIndex} onSelect={(index) => setTabIndex(index)}>
    <TabList>
      <Tab>Salad</Tab>
      <Tab>Pizza</Tab>
      <Tab>Soup</Tab>
      <Tab>Dessert</Tab>
      <Tab>Drinks</Tab>
    </TabList>

    <TabPanel>
      <OrderTabs items={salad}></OrderTabs>
    </TabPanel>
    <TabPanel>
    <OrderTabs items={pizza}></OrderTabs>
    </TabPanel>
    <TabPanel>
    <OrderTabs items={soup}></OrderTabs>
    </TabPanel>
    <TabPanel>
    <OrderTabs items={dessert}></OrderTabs>
    </TabPanel>
    <TabPanel>
    <OrderTabs items={drinks}></OrderTabs>
    </TabPanel>
  </Tabs>
        </div>

    );
};

export default Order;