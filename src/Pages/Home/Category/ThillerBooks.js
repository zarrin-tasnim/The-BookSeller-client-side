import React, { useState } from 'react';

import img2 from '../../../assets/images/Gone Girl.jpg';



import { Link } from 'react-router-dom';
import { useEffect } from 'react';
import Productoption from './../../Productdata/AvailabeProductdata/Productoption';
import ProductoptionThriller from './ProductoptionThriller';

const ThillerBooks = () => {
   

    return (
        <div className="card bg-base-100 shadow-xl">
            <figure className="px-10 pt-10">
                <img src={img2} alt="Shoes" className="object-contain h-48 w-96 rounded-xl" />
            </figure>
            <div className="card-body items-center text-center">
                <h2 className="card-title">Thriller</h2>

                <Link to={`/thriller`}>
                    <button className="btn btn-primary">View details</button>
                </Link>

            </div>
           
        </div>
    );
};

export default ThillerBooks;