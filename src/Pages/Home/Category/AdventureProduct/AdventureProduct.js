import React from 'react';

import img3 from '../../../../assets/images/Around the world in 80 days.jpeg';


import { Link } from 'react-router-dom';


const AdventureProduct = () => {
    return (
        <div className="card bg-base-100 shadow-xl">
            <figure className="px-10 pt-10">
                <img src={img3} alt="Shoes" className="object-contain h-48 w-96 rounded-xl" />
            </figure>
            <div className="card-body items-center text-center">
                <h2 className="card-title">Adventure</h2>

                <Link to={`/adventure`}>
                    <button className="btn btn-primary">View details</button>
                </Link>

            </div>
        </div>
    );
};

export default AdventureProduct;