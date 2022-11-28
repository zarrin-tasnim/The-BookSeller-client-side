import React from 'react';


import { Link } from 'react-router-dom';


const Category = ({category}) => {

  
   
    const { name, img, id } = category;
    // console.log(category);


    return (
        <div className="card bg-base-100 shadow-xl">
            <figure className="px-10 pt-10">
                <img src={img} alt="book" className="rounded-xl object-contain h-30 w-60" />
            </figure>
            <div className="card-body items-center text-center">
                <h1 className="card-title">{name}</h1>
                <div className="card-actions text-center items-center mt-5">
                    <Link to={`/categories/${id}`}>
                        <button className="btn btn-secondary btn-glass w-full mx-auto">View ALL</button>
                    </Link>
                </div>
            </div>
        </div>

    );
};

export default Category;