import React, { useState } from 'react';



import { format } from 'date-fns';

import { useEffect } from 'react';

import BookingModal from './../../../Appointment/BookingModal/BookingModal';
import AdventureProduct from './AdventureProduct';
import AdventureMap from './AdventureMap';






const AvailableAdventure = () => {
    const [treatment, setTreatment] = useState(null);
    const [selectedDate, setSelectedDate] = useState(new Date());
    const date = format(selectedDate, 'PP');
    const [adventure, setAdventure] = useState([]);

    useEffect(() => {
        fetch('http://localhost:5000/adventureBooks')
            .then(res => res.json())
            .then(data => setAdventure(data))
    }, []);
    return (
        
        <div>
            <section className='my-16'>

                <div className='grid gap-6 grid-cols-1 md:grid-cols-2 lg:grid-cols-3 mt-6'>
                    {
                        adventure.map(adventure => <AdventureMap
                            key={adventure._id}
                            adventure={adventure}
                        ></AdventureMap>)
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
        </div>
    );
};

export default AvailableAdventure;