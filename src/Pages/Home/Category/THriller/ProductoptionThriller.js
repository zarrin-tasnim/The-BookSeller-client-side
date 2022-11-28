import React from 'react';

const ProductoptionThriller = ({ thriller, setTreatment }) => {
    const { name, price} = thriller;
    return (
        <div className="card shadow-xl">
            <div className="card-body text-center">
                <h2 className="text-2xl text-secondary font-bold text-center">{name}</h2>
                
                <p><small>Price: ${price}</small></p>
                <div className="card-actions justify-center">
                    <label
                        htmlFor="booking-modal"
                        className="btn btn-primary text-white"
                        onClick={() => setTreatment(thriller)}
                    >Book Appointment</label>
                </div>
            </div>
        </div>
    );
};

export default ProductoptionThriller;