import React from 'react';
import trackingImg from '../../src/assets/live-tracking.png'
import safeDeliveryImg from '../../src/assets/safe-delivery.png';
import callCenterImg from '../../src/assets/safe-delivery.png';

const servicesData = [
    {
        title: "Live Parcel Tracking",
        description:
            "Stay updated in real-time with our live parcel tracking feature. From pick-up to delivery, monitor your shipment’s journey and get instant status updates for complete peace of mind.",
        image: trackingImg,
    },
    {
        title: "100% Safe Delivery",
        description:
            "We ensure your parcels are handled with the utmost care and delivered securely to their destination. Our reliable process guarantees safe and damage-free delivery every time.",
        image: safeDeliveryImg,
    },
    {
        title: "24/7 Call Center Support",
        description:
            "Our dedicated support team is available around the clock to assist you with any questions, updates, or delivery concerns—anytime you need us.",
        image: callCenterImg,
    },
];

const HomeServices = () => {
    return (
        <div className=" py-12 px-4 md:px-10 border-b-2 border-dashed border-t-2 border-gray-300">
            <div  data-aos="zoom-in-right" className="max-w-7xl mx-auto space-y-8 ">
                {servicesData.map((service, index) => (
                    <div
                        key={index}
                        className="bg-white rounded-xl shadow-sm p-6 flex flex-col md:flex-row items-center gap-6 "
                    >
                        <img
                            src={service.image}
                            alt={service.title}
                            className="w-36 md:w-48"
                        />
                        <div className="hidden md:block h-24 border-l-2 border-gray-300 border-dashed"></div>            <div className="text-center md:text-left ">
                            <h3 className="text-xl font-bold text-[#03373D] mb-2">{service.title}</h3>
                            <p className="text-gray-600 text-sm">{service.description}</p>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default HomeServices;
