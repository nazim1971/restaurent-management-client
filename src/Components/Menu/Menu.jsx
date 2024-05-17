import { Helmet } from 'react-helmet-async';
import Cover from '../Shared/Cover';
import useMenu from '../Hooks/useMenu';
import TodayOffer from './TodayOffer';
import Desserts from './Desserts';
import Pizza from './Pizza';
import Salad from './Salad';
import Soup from './Soup';


const Menu = () => {
    const [menu] = useMenu();
    const dessert = menu.filter(i=> i.category === 'dessert')
    const salad = menu.filter(i=> i.category === 'salad')
    const pizza = menu.filter(i=> i.category === 'pizza')
    const soup = menu.filter(i=> i.category === 'soup')
    const offered = menu.filter(i=> i.category === 'offered')
    return (
        <div>
             <Helmet>
        <title>Bisto | My Menu</title>
        <link rel="canonical" href="https://www.tacobell.com/" />
      </Helmet>
            <Cover img={('https://i.ibb.co/CB2ZmgB/da-2.jpg')} text={'Our Menu'}/>
            <TodayOffer offer={offered} />
            <Desserts dessert={dessert} />
            <Pizza pizza={pizza} />
            <Salad salad={salad} />
            <Soup soup={soup} />

        </div>
    );
};

export default Menu;