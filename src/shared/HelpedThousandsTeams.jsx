import React from 'react';
import casio from '../assets/brands/casio.png';
import amazon from '../assets/brands/amazon.png';
import moonstar from '../assets/brands/moonstar.png';
import start from '../assets/brands/start.png';
import randstad from '../assets/brands/randstad.png';
import amazon_vector from '../assets/brands/amazon_vector.png';
import start_people from '../assets/brands/start-people 1.png';
import Marquee from 'react-fast-marquee';

const HelpedThousandsTeams = () => {
  const company = [casio, amazon, moonstar, start, randstad, amazon_vector, start_people];

  return (
    <div className="my-10 px-4 md:px-8 lg:px-20">
      <h1 className="text-[#03373D] text-center font-extrabold text-3xl mb-8">
        We've helped thousands of sales teams
      </h1>

     <Marquee pauseOnHover={true}>
         <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-7 gap-6 items-center justify-center">
        {company.map((logo, index) => (
          <div key={index} className="flex items-center justify-center p-3 hover:scale-105 transition-transform duration-300">
            <img src={logo} alt={`Company ${index + 1}`} className="max-h-12 object-contain" />
          </div>
        ))}
      </div>
     </Marquee>
    </div>
  );
};

export default HelpedThousandsTeams;
