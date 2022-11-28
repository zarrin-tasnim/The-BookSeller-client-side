import React from 'react';
import { DayPicker } from 'react-day-picker';

const ProductdataBanner = ({ selectedDate, setSelectedDate }) => {
    return (
        <div>
            <header className='my-6'>
                <div className="hero">
                    <div className="hero-content flex-col lg:flex-row-reverse">
                       
                        <div className='mr-6 sm:w-full'>
                            <DayPicker
                                mode='single'
                                selected={selectedDate}
                                onSelect={setSelectedDate}
                            />
                        </div>
                    </div>
                </div>
            </header>
        </div>
    );
};

export default ProductdataBanner;