
import { format } from 'date-fns';

import { useEffect } from 'react';
import React, { useState } from 'react';
import ProductoptionThriller from './ProductoptionThriller';
import BookingModal from '../../../Appointment/BookingModal/BookingModal';

const AvailableThriller = () => {
    const [thriller, setThriller] = useState([]);
    const [treatment, setTreatment] = useState(null);
    const [selectedDate, setSelectedDate] = useState(new Date());
    const date = format(selectedDate, 'PP');

    useEffect(() => {
        fetch('https://b612-used-products-resale-server-side-zarrin-tasnim.vercel.app/thrillerBooks')
            .then(res => res.json())
            .then(data => setThriller(data))
    }, []);
    return (
        <section className='my-16'>

            <div className='grid gap-6 grid-cols-1 md:grid-cols-2 lg:grid-cols-3 mt-6'>
                {
                    thriller.map(thriller => <ProductoptionThriller
                        key={thriller._id}
                        thriller={thriller}
                    ></ProductoptionThriller>)
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

export default AvailableThriller;