import React, { useState } from 'react';
import img1 from '../../../assets/images/HauntingOfHillHouse.JPG';
import img2 from '../../../assets/images/Gone Girl.jpg';
import img3 from '../../../assets/images/Around the world in 80 days.jpeg';

import PrimaryButton from './../../../components/PrimaryButton/PrimaryButton';
import { Link } from 'react-router-dom';
import { useEffect } from 'react';
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
    const [products, setProducts] = useState([]);

    useEffect(() => {
        fetch('http://localhost:5000/horrorBooks')
            .then(res => res.json())
            .then(data => setProducts(data))
    }, []);

    return (
        <div className='mt-16'>
            <div className='text-center'>
                <h3 className='text-xl font-bold text-primary uppercase'>Our Product categories</h3>
                <h2 className='text-3xl'>Categories We Provide</h2>
            </div>
            <div className='grid gap-8 grid-cols-1 md:grid-cols-2 lg:grid-cols-3'>
                <div className="card bg-base-100 shadow-xl">
                    <figure className="px-10 pt-10">
                        <img src={img1} alt="Shoes" className="object-contain h-48 w-96 rounded-xl" />
                    </figure>
                    <div className="card-body items-center text-center">
                        <h2 className="card-title">Horror</h2>

                        <Link to={`/products`}>
                            <button className="btn btn-primary">View details</button>
                        </Link>

                    </div>
                </div>
                {/* <div className="card bg-base-100 shadow-xl">
                    <figure className="px-10 pt-10">
                        <img src={img2} alt="Shoes" className="object-contain h-48 w-96 rounded-xl" />
                    </figure>
                    <div className="card-body items-center text-center">
                        <h2 className="card-title">Thriller</h2>

                        <Link to={`/products/${_id}`}>
                            <button className="btn btn-primary">View details</button>
                        </Link>

                    </div>
                </div>
                <div className="card bg-base-100 shadow-xl">
                    <figure className="px-10 pt-10">
                        <img src={img3} alt="Shoes" className="object-contain h-48 w-96 rounded-xl" />
                    </figure>
                    <div className="card-body items-center text-center">
                        <h2 className="card-title">Adventure</h2>

                        <Link to={`/products/${_id}`}>
                            <button className="btn btn-primary">View details</button>
                        </Link>

                    </div>
                </div> */}
            </div>
        </div>
    );
};

export default Category;