import React from 'react';
import quote from '../../../assets/icons/quote.svg';
import people1 from '../../../assets/images/people1.png';
import people2 from '../../../assets/images/people2.png';
import people3 from '../../../assets/images/people3.png';
import Review from './Review';


const Testimonial = () => {

    const reviews = [
        {
            _id: 1, 
            name: 'Winson Herry',
            img: people1,
            review: 'It is a perfect website for anyone.Any type of books is available here.I found all of my favorite book in here at a very low price.',
            location: 'California'
        },
        {
            _id: 2, 
            name: 'Winson Herry',
            img: people2,
            review: 'It is a perfect website for anyone.Any type of books is available here.I found all of my favorite book in here at a very low price.',
            location: 'California'
        },
        {
            _id: 3, 
            name: 'Winson Herry',
            img: people3,
            review: 'It is a perfect website for anyone.I found all of my favorite book in here at a very low price.',
            location: 'California'
        },
    ]

    return (
        <section className='my-16'>
            <div className='flex justify-between'>
                <div className='text-center mr-20'>
                    <h4 className="text-xl text-primary font-bold">Reviews</h4>
                    <h2 className="text-4xl mr-10">What Our Buyers Says</h2>
                </div>
                <figure>
                    <img className='w-24 lg:w-48' src={quote} alt="" />
                </figure>
            </div>
            <div className='grid gap-6 grid-cols-1 md:grid-cols-2 lg:grid-cols-3'>
                {
                    reviews.map(review =><Review
                        key={review._id}
                        review={review}
                    >
                    </Review>)
                }
            </div>
        </section>
    );
};

export default Testimonial;