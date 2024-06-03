import SectionTitle from '../../../Components/SectionTitle/SectionTitle';
import MenuItems from '../../Shared/MenuItems/MenuItems';
import useMenu from '../../../hooks/useMenu';

const PopularMenu = () => {
    const [menu] = useMenu();
    const popular = menu.filter(item=>item.category === 'popular');

    // useEffect(()=>{
    //     fetch('fakeData.json')
    //     .then(res=>res.json())
    //     .then(data=>{
    //         const popularItems = data.filter(item=>item.category === 'popular')
    //         setMenu(popularItems)
    //     })
    // },[])
    return (
        <div className='my-12'>
            <SectionTitle 
            heading={"From Our Menu"}
            subHeading={"Check It Out"}
            ></SectionTitle>
            <div className='grid md:grid-cols-2 gap-10'>
                {
                    popular.map(item=><MenuItems key={item._id} item={item}></MenuItems>)
                }
            </div>
        </div>
    );
};

export default PopularMenu;