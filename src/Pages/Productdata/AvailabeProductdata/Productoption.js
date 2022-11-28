import React from 'react';


const Productoption = ({ product, setTreatment }) => {
    const { name, picture, location, resale_price, original_price, years_of_use, time_of_posting, seller_name } = product;

    console.log('hellow',product);
    return (
        <div className="card shadow-xl">
            <div className="card-body text-center">
                <figure className="px-10 pt-10">
                    <img src={picture} alt="book" className="rounded-xl object-contain h-40 w-60" />
                </figure>
                <h2 className="text-2xl text-secondary font-bold text-center">{name}</h2>
                
                <h2 className="text-2xl text-secondary font-bold text-center">Location:{location}</h2>
                
                <p><small>Price: ${resale_price}</small></p>
                <p><small>Original Price: ${original_price}</small></p>
                <p><small>Year of Use: ${years_of_use}</small></p>
                <p><small>Time of posting: ${time_of_posting}</small></p>
                <p><small>Seller's Name: ${seller_name}</small></p>
                
                <div className="card-actions justify-center">
                    <label
                        htmlFor="booking-modal"
                        className="btn btn-primary text-white"
                        onClick={() => setTreatment(product)}
                    >Book Now</label>
                </div>
                
            </div>
        </div>
    );
};

export default Productoption;