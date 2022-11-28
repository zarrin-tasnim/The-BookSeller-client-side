import React from 'react';

const Productoption = ({ product, setTreatment }) => {
    const { name, price} = product;
    return (
        <div className="card shadow-xl">
            <div className="card-body text-center">
                <h2 className="text-2xl text-secondary font-bold text-center">{name}</h2>
                
                <p><small>Price: ${price}</small></p>
                <div className="card-actions justify-center">
                    <label
                        htmlFor="booking-modal"
                        className="btn btn-primary text-white"
                        onClick={() => setTreatment(product)}
                    >Book Appointment</label>
                </div>
            </div>
        </div>
    );
};

export default Productoption;