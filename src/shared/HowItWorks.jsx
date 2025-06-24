import React from 'react';
import HowItWorkCard from './HowItWorkCard';
const howItWorksData = [
  {
    title: "Booking Pick & Drop",
    description: "From personal packages to business shipments — we deliver on time, every time.",
    icon: "📦", // For placeholder, can be replaced with SVG or react-icons
  },
  {
    title: "Cash On Delivery",
    description: "From personal packages to business shipments — we deliver on time, every time.",
    icon: "💰",
  },
  {
    title: "Delivery Hub",
    description: "From personal packages to business shipments — we deliver on time, every time.",
    icon: "🏢",
  },
  {
    title: "Booking SME & Corporate",
    description: "From personal packages to business shipments — we deliver on time, every time.",
    icon: "🏬",
  },
];
const HowItWorks = () => {
    return (
        <div className="my-10 px-4 md:px-10">
      <h1 className="text-3xl font-extrabold text-[#03373D] mb-8">How it Works</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {
            howItWorksData.map((data, index) => <HowItWorkCard key={index} data={data}></HowItWorkCard>)
        }
      </div>
    </div>
    );
};

export default HowItWorks;