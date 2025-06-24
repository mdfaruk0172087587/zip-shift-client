import React from 'react';

const Services = ({ services }) => {
    return (
        <div data-aos="zoom-in" className='card p-6 bg-white dark:bg-gray-800 text-gray-900 dark:text-gray-100 shadow-xl hover:shadow-2xl transition-shadow duration-300 hover:bg-[#CAEB66]'>
            <div className="flex flex-col items-center text-center">
                {services.icon}
                <h4 className="text-xl font-semibold mb-2">{services.title}</h4>
                <p className="text-gray-600 dark:text-gray-300 text-sm">{services.description}</p>
            </div>
        </div>
    );
};

export default Services;