import React from 'react';
import img1 from '../../../assets/images/HauntingOfHillHouse.JPG';
import img2 from '../../../assets/images/Gone Girl.jpg';
import img3 from '../../../assets/images/Around the world in 80 days.jpeg';
import CategoryName from './CategoryName';
const Category = () => {

    const categoryData = [
        {
            "_id": 1,
            "name": "Horror",
            img: img1
        },
        {
            "_id": 2,
            "name": "Thriller",
            img: img2

        },
        {
            "_id": 3,
            "name": "Adventure",
            img: img3

        }

    ]
    return (
        <div className='mt-16'>
            <div className='text-center'>
                <h3 className='text-xl font-bold text-primary uppercase'>Our Product categories</h3>
                <h2 className='text-3xl'>Categories We Provide</h2>
            </div>
            <div className='grid gap-8 grid-cols-1 md:grid-cols-2 lg:grid-cols-3'>
                {
                    categoryData.map(category => <CategoryName
                        key={category.id}
                        category={category}
                    ></CategoryName>)
                }
            </div>
        </div>
    );
};

export default Category;