import React from 'react';
import chair from '../../../assets/images/banner2.jpeg';
import PrimaryButton from '../../../components/PrimaryButton/PrimaryButton';

const Banner = () => {
    return (
        <div className="hero">
            <div className="hero-content flex-col lg:flex-row-reverse">
                <img src={chair} className="rounded-lg lg:w-2/3 shadow-2xl" alt='' />
                <div>
                    <h1 className="text-5xl font-bold">Big Sale News!</h1>
                    <p className="py-6 text-3xl">Sale & Share Your Books.</p>
                    <p className="py-6 ">We have more than 1000+ books which we are giving at a discount price.Grab your favourite ones.!!.Anyone can sale their books in our site at a favourable price. </p>
                    <PrimaryButton>Getting Started</PrimaryButton>
                </div>
            </div>
        </div>
    );
};

export default Banner;