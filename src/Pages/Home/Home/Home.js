import React from 'react';
import Banner from '../Banner/Banner';
import Category from '../Category/Category';
// import MakeAppointment from '../MakeAppointment/MakeAppointment';
import Testimonial from '../Testimonial/Testimonial';

const Home = () => {
    return (
        <div className='mx-5'>
            <Banner></Banner>
            <Category></Category>
            <Testimonial></Testimonial>
        </div>
    );
};

export default Home;