import React from 'react';

const MenuItems = ({item}) => {
    const {image, price, name, recipe} = item || {}
    return (
        <div className='flex space-x-4'>
            <img style={{borderRadius: "0 200px 200px 200px"}} className='w-[100px]' src={image} alt="" />
            <div>
                <h1 className='uppercase mb-2'>{name} -------------------</h1>
                <p>{recipe}</p>
            </div>
                <p className='text-[#d99904]'>{price}</p>
        </div>
    );
};

export default MenuItems;