import React from 'react';
import boxesImage from '../assets/customer-top.png'
const WhatCustomers = () => {
    return (
         <div className="bg-gray-100 py-12 px-4 md:px-10 text-center">
            {/* Image */}
            <div className="flex justify-center mb-6">
                <img src={boxesImage} alt="Customer Feedback Illustration" className="h-24 md:h-28" />
            </div>

            {/* Title */}
            <h1 className="text-2xl md:text-3xl font-extrabold text-[#03373D] mb-4">
                What our customers are saying
            </h1>

            {/* Description */}
            <p className="max-w-3xl mx-auto text-sm md:text-base text-gray-600">
                Enhance posture, mobility, and well-being effortlessly with Posture Pro.
                Achieve proper alignment, reduce pain, and strengthen your body with ease!
            </p>
        </div>
    );
};

export default WhatCustomers;