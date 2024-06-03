import React from 'react';
import Cover from '../../Shared/Cover/Cover';
import menuBG from '../../../assets/menu/banner3.jpg';
import PopularMenu from '../../Home/PopularMenu/PopularMenu';
import useMenu from '../../../hooks/useMenu';
import MenuCategory from '../MenuCategory/MenuCategory';
import SectionTitle from '../../../Components/SectionTitle/SectionTitle';
import dessertImg from '../../../assets/menu/dessert-bg.jpeg'
import pizzaImg from '../../../assets/menu/pizza-bg.jpg';
import soupImg from '../../../assets/menu/soup-bg.jpg';
import saladImg from '../../../assets/menu/salad-bg.jpg';

const Menu = () => {
    const [menu] = useMenu();
    const dessert = menu.filter(item=>item.category === 'dessert');
    const salad = menu.filter(item=>item.category === 'salad');
    const pizza = menu.filter(item=>item.category === 'pizza');
    const soup = menu.filter(item=>item.category === 'soup');
    const offered = menu.filter(item=>item.category === 'offered');
    return (
        <div>
            <Cover img={menuBG} title={"our menu"} height={"800px"}></Cover>
            <SectionTitle heading={"today's offer"} subHeading={"Don't miss"}></SectionTitle>
            <MenuCategory items={offered}></MenuCategory>
            <MenuCategory items={dessert} title={"dessert"} img={dessertImg}></MenuCategory>
            <MenuCategory items={pizza} title={"pizza"} img={pizzaImg}></MenuCategory>
            <MenuCategory items={soup} title={"soup"} img={soupImg}></MenuCategory>
            <MenuCategory items={salad} title={"salad"} img={saladImg}></MenuCategory>
        </div>
    );
};

export default Menu;