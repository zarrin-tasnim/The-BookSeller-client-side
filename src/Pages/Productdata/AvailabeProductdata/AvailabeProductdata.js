
import { format } from 'date-fns';
import React, { useState } from 'react';
import BookingModal from '../BookingModal/BookingModal';
import Productoption from './Productoption';
import { useEffect } from 'react';

const AvailabeProductdata = ({ selectedDate }) => {
    const [treatment, setTreatment] = useState(null);
    const date = format(selectedDate, 'PP');
    // const collection = useLoaderData();
    
    // if (isLoading) {
    //     return <Loading></Loading>
    // }

    const [products, setProducts] = useState([]);

    useEffect(() => {
        fetch('http://localhost:5000/horrorBooks')
            .then(res => res.json())
            .then(data =>setProducts(data))
    }, []);

    return (
        <section className='my-16'>
            <p className='text-center text-secondary font-bold'>Available Appointments on {format(selectedDate, 'PP')}</p>
            <div className='grid gap-6 grid-cols-1 md:grid-cols-2 lg:grid-cols-3 mt-6'>
                {
                    products.map(product => <Productoption
                        key={product._id}
                        product={product}
                        setTreatment={setTreatment}
                    ></Productoption>)
                }
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