import React, { useState } from 'react';
import AvailabeProductdata from '../AvailabeProductdata/AvailabeProductdata';
import ProductdataBanner from '../ProductdataBanner/ProductdataBanner';

const Productdata = () => {
    const [selectedDate, setSelectedDate] = useState(new Date());
    return (
        <div>
            {/* <ProductdataBanner
                selectedDate={selectedDate}
                setSelectedDate={setSelectedDate}
            ></ProductdataBanner> */}
            <AvailabeProductdata
                selectedDate={selectedDate}
            ></AvailabeProductdata>
        </div>
    );
};

export default Productdata;