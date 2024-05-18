import { useState } from "react";
import Cover from "../Shared/Cover";
import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import "react-tabs/style/react-tabs.css";
import useMenu from "../Hooks/useMenu";

import OrderTabs from "../Shared/OrderTabs";
import { useParams } from "react-router-dom";

const OrderFood = () => {

  const categories = ['salad', 'pizza', 'soup', 'desserts', 'drinks'];
  const {category} = useParams();
  const initialIndex = categories.indexOf(category);
  const [tabIndex, setTabIndex] = useState(initialIndex);
  const [menu] = useMenu();
  const dessert = menu.filter((i) => i.category === "dessert");
  const salad = menu.filter((i) => i.category === "salad");
  const pizza = menu.filter((i) => i.category === "pizza");
  const soup = menu.filter((i) => i.category === "soup");
  const drinks = menu.filter((i) => i.category === "drinks");

 

  return (
    <div>
      <div className="mb-16">
        <Cover img={"https://i.ibb.co/CB2ZmgB/da-2.jpg"} text={"Order Food"} />
      </div>

      <Tabs  selectedIndex={tabIndex} onSelect={(index) => setTabIndex(index)}>
        <TabList className="text-center border-b">
          <Tab>SALAD</Tab>
          <Tab>PIZZA</Tab>
          <Tab>SOUPS</Tab>
          <Tab>DESSERTS</Tab>
          <Tab>DRINKS</Tab>
        </TabList>

        <TabPanel  >
          <OrderTabs items={salad} />
        </TabPanel>
        <TabPanel>
          <OrderTabs items={pizza} />
        </TabPanel>
        <TabPanel>
          <OrderTabs items={soup} />
        </TabPanel>
        <TabPanel>
          <OrderTabs items={dessert} />
        </TabPanel>
        <TabPanel>
          <OrderTabs items={drinks} />
        </TabPanel>
      </Tabs>
    </div>
  );
};

export default OrderFood;
