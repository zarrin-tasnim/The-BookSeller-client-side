import React from 'react';
import Banner from '../Banner/Banner';
import Category from '../Category/Category';
import InfoCards from '../InfoCards/InfoCards';
import MakeAppointment from '../MakeAppointment/MakeAppointment';
import Services from '../Services/Services';
import Testimonial from '../Testimonial/Testimonial';

const Home = () => {
    return (
        <div className='mx-5'>
            <Banner></Banner>
            <Category></Category>
            <InfoCards></InfoCards>
        </div>
    );
};

export default Home;