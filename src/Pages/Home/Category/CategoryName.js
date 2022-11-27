import React from 'react';
import PrimaryButton from './../../../components/PrimaryButton/PrimaryButton';

const CategoryName = ({ category }) => {
    const { name, description, img } = category;
    return (
        <div className="card bg-base-100 shadow-xl">
            <figure className="px-10 pt-10">
                <img src={img} alt="Shoes" className="rounded-xl image-full" />
            </figure>
            <div className="card-body items-center text-center">
                <h2 className="card-title">{name}</h2>
                <PrimaryButton>View All</PrimaryButton>
            </div>
        </div>
    );
};

export default CategoryName;