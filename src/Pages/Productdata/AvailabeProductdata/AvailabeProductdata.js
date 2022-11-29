
import { useQuery } from '@tanstack/react-query';
import { format } from 'date-fns';
import React, { useState } from 'react';
import Loading from '../../Shared/Loading/Loading';
import BookingModal from '../BookingModal/BookingModal';
import Productoption from './Productoption';

import { useLoaderData } from 'react-router-dom';

const AvailabeProductdata = () => {
    const [treatment, setTreatment] = useState(null);
    const [selectedDate, setSelectedDate] = useState(new Date());
    const date = format(selectedDate, 'PP');

    const products = useLoaderData();

    // const { data: appointmentOptions = [], refetch, isLoading } = useQuery({
    //     queryKey: ['appointmentOptions', date],
    //     queryFn: async () => {
    //         const res = await fetch(`https://b612-used-products-resale-server-side-zarrin-tasnim.vercel.app/appointmentOptions?date=${date}`);
    //         const data = await res.json();
    //         return data
    //     }
    // });

    // if (isLoading) {
    //     return <Loading></Loading>
    // }

   

   

    return (
        <section className='my-16'>
           
            <div className='grid gap-6 grid-cols-1 md:grid-cols-2 lg:grid-cols-3 mt-6'>
                {
                    products.map(product => <Productoption
                        key={product.id}
                        product={product}
                        setTreatment={setTreatment}
                        selectedDate={selectedDate}
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