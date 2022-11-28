import React from 'react';
import PrimaryButton from './../../../components/PrimaryButton/PrimaryButton';
import { Link } from 'react-router-dom';

const CategoryName = ({ category }) => {
    const { name, description, img, _id } = category;
    return (
        <div className="card bg-base-100 shadow-xl">
            <figure className="px-10 pt-10">
                <img src={img} alt="Shoes" className="object-contain h-48 w-96 rounded-xl" />
            </figure>
            <div className="card-body items-center text-center">
                <h2 className="card-title">{name}</h2>
                
                    <Link to={`/products/${_id}`}>
                        <button className="btn btn-primary">View details</button>
                    </Link>
               
            </div>
        </div>
    );
};

export default CategoryName;