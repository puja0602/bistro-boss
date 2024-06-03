import React, { useEffect, useState } from 'react';
import SectionTitle from '../../../Components/SectionTitle/SectionTitle';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';
// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
// import required modules
import { Navigation } from 'swiper/modules';
import { Rating } from '@smastrom/react-rating'
import '@smastrom/react-rating/style.css'

const Testimonials = () => {
    const [review, setReview] = useState([])
    useEffect(()=>{
        fetch('http://localhost:5000/reviews')
        .then(res=>res.json())
        .then(data=>{
            setReview(data)
        })
    },[])
    return (
        <div className='my-12'>
            <SectionTitle heading={"TESTIMONIALS"} subHeading={"---What Our Clients Say---"}></SectionTitle>
            <Swiper navigation={true} modules={[Navigation]} className="mySwiper">
        
            {
                review.map(rev=><SwiperSlide key={rev._id}>
                    <div className='flex flex-col items-center mx-24 text-center'>
                    <Rating
                    style={{ maxWidth: 180 }}
                    value={rev.rating}
                    readOnly
                    />
                        <p className='py-8'>{rev.details}</p>
                        <h1 className='text-2xl text-orange-700'>{rev.name}</h1>
                    </div>
                </SwiperSlide>)
            }
      </Swiper>
        </div>
    );
};

export default Testimonials;