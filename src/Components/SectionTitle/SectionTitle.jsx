import React from 'react';

const SectionTitle = ({heading, subHeading}) => {
    return (
        <div className='md:w-4/12 mx-auto my-10'>
            <p className='text-[#d99904] mb-2 text-center'>--- {subHeading} ---</p>
            <h1 className='text-[40px] uppercase border-y-2 text-center py-2 text-[#151515]'>{heading}</h1>
        </div>
    );
};

export default SectionTitle;