import React from 'react';
import Banner from '../Banner/Banner';

// import MakeAppointment from '../MakeAppointment/MakeAppointment';
import Testimonial from '../Testimonial/Testimonial';
import CategoryName from './../Category/CategoryName';

const Home = () => {
    return (
        <div className='mx-5'>
            <Banner></Banner>
           <CategoryName></CategoryName>
            <Testimonial></Testimonial>
        </div>
    );
};

export default Home;