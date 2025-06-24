import React from 'react';
import FaqCard from './FaqCard';

const FaqSection = () => {
    return (
        <div className='my-10  space-y-3'>
            <h1 className='text-[#03373D] font-extrabold text-4xl text-center'>Frequently Asked Question (FAQ)</h1>
            <p className='text-[#606060] text-center'>Enhance posture, mobility, and well-being effortlessly with Posture Pro. Achieve proper alignment, reduce <br /> pain, and strengthen your body with ease!</p>
            <FaqCard></FaqCard>
        </div>
    );
};

export default FaqSection;