import React from 'react';

const HowItWorkCard = ({data}) => {
const {icon, title, description} = data;
    return (
        <div className="card bg-base-100 rounded-xl shadow-md p-6 text-center">
            <div className="text-4xl mb-3">{icon}</div>
            <h2 className="text-lg font-semibold text-[#03373D] mb-2">{title}</h2>
            <p className="text-sm text-gray-600">{description}</p>
          </div>
    );
};

export default HowItWorkCard;