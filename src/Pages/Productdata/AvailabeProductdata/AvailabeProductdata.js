import { useQuery } from '@tanstack/react-query';
import { format } from 'date-fns';
import React, { useState } from 'react';
import Loading from '../../Shared/Loading/Loading';
import BookingModal from '../BookingModal/BookingModal';
import Productoption from './Productoption';
import { useLoaderData } from 'react-router-dom';

const AvailabeProductdata = ({ selectedDate }) => {
    const [treatment, setTreatment] = useState(null);
    const date = format(selectedDate, 'PP');
    const collection = useLoaderData();
    const { name, price, slots } = collection;
    // if (isLoading) {
    //     return <Loading></Loading>
    // }

    return (
        <section className='my-16'>
            <p className='text-center text-secondary font-bold'>Available Appointments on {format(selectedDate, 'PP')}</p>
            <div className='grid gap-6 grid-cols-1 md:grid-cols-2 lg:grid-cols-3 mt-6'>
                <div className="card shadow-xl">
                    <div className="card-body text-center">
                        <h2 className="text-2xl text-secondary font-bold text-center">{name}</h2>
                       
                        <p><small>Price: ${price}</small></p>
                        <div className="card-actions justify-center">
                            <label
                                htmlFor="booking-modal"
                                className="btn btn-primary text-white"
                                onClick={() => setTreatment(collection)}
                            >Book Appointment</label>
                        </div>
                    </div>
                </div>    
            </div>
            {
                treatment &&
                <BookingModal
                    selectedDate={selectedDate}
                    treatment={treatment}
                    setTreatment={setTreatment}
                ></BookingModal>
            }
        </section>
    );
};

export default AvailabeProductdata;