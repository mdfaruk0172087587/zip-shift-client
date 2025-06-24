import React from 'react';
import { FaShippingFast, FaGlobe, FaBoxOpen, FaMoneyBillWave, FaWarehouse, FaUndo } from 'react-icons/fa';
import Services from './Services';

const servicesData = [
  {
    icon: <FaShippingFast className="text-4xl text-primary mb-3" />,
    title: "Express & Standard Delivery",
    description:
      "We deliver parcels within 24–72 hours in Dhaka, Chittagong, Sylhet, Khulna, and Rajshahi. Express delivery available in Dhaka within 4–6 hours from pick-up to drop-off.",
  },
  {
    icon: <FaGlobe className="text-4xl text-primary mb-3" />,
    title: "Nationwide Delivery",
    description:
      "We deliver parcels nationwide with home delivery in every district, ensuring your products reach customers within 48–72 hours.",
  },
  {
    icon: <FaBoxOpen className="text-4xl text-primary mb-3" />,
    title: "Fulfillment Solution",
    description:
      "We also offer customized service with inventory management support, online order processing, packaging, and after sales support.",
  },
  {
    icon: <FaMoneyBillWave className="text-4xl text-primary mb-3" />,
    title: "Cash on Home Delivery",
    description:
      "100% cash on delivery anywhere in Bangladesh with guaranteed safety of your product.",
  },
  {
    icon: <FaWarehouse className="text-4xl text-primary mb-3" />,
    title: "Corporate Service / Contract In Logistics",
    description:
      "Customized corporate services which includes warehouse and inventory management support.",
  },
  {
    icon: <FaUndo className="text-4xl text-primary mb-3" />,
    title: "Parcel Return",
    description:
      "Through our reverse logistics facility we allow end customers to return or exchange their products with online business merchants.",
  },
];

const ServicesSection = () => {
  return (
    <section  className="my-10 px-4 md:px-10 bg-[#03373D] py-10 rounded-2xl ">
      <h2 className="text-3xl font-bold text-center mb-6 text-white">Our Services</h2>
      <p className="text-center mb-10 max-w-3xl mx-auto text-[#DADADA]">
        Enjoy fast, reliable parcel delivery with real-time tracking and zero hassle. From personal packages to business shipments — we deliver on time, every time.
      </p>
     
       <div  className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {
        servicesData.map((services, index) => <Services key={index} services={services}></Services>)
       }
       </div>
     
    </section>
  );
};

export default ServicesSection;
