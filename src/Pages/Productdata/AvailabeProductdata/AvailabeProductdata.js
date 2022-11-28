
import React, { useState } from 'react';
import BookingModal from '../BookingModal/BookingModal';
import Productoption from './Productoption';

import { useLoaderData } from 'react-router-dom';

const AvailabeProductdata = () => {
    const [treatment, setTreatment] = useState(null);
   
    
    // const collection = useLoaderData();
    
    // if (isLoading) {
    //     return <Loading></Loading>
    // }

   
    const [selectedDate, setSelectedDate] = useState(new Date());
    const products = useLoaderData();

    return (
        <section className='my-16'>
           
            <div className='grid gap-6 grid-cols-1 md:grid-cols-2 lg:grid-cols-3 mt-6'>
                {
                    products.map(product => <Productoption
                        key={product.id}
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