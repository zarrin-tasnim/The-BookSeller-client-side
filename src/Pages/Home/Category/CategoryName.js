import React from 'react';
import PrimaryButton from './../../../components/PrimaryButton/PrimaryButton';
import { Link, useLoaderData } from 'react-router-dom';
import img1 from '../../../assets/images/HauntingOfHillHouse.JPG';
import img2 from '../../../assets/images/Gone Girl.jpg';
import img3 from '../../../assets/images/Around the world in 80 days.jpeg';
import Category from './Category';

const CategoryName = () => {
    
    const categories = useLoaderData();

    return (
        <section className='max-w-[1140px] mx-auto pt-20 pb-20'>
            <div className="text-center pb-16">
                <h4 className="text-xl text-primary font-bold text-center pb-3">Category</h4>
                <h2 className="text-4xl">Our Collections</h2>
            </div>
            <div className='grid gap-8 grid-cols-1 md:grid-cols-2 lg:grid-cols-3'>
                {
                    categories.map(category => <Category
                        key={category.id}
                        category={category}
                    ></Category>)
                }
            </div>
        </section>
    );

 
};

export default CategoryName;