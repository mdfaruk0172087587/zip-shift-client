import React from 'react';
import Banner from '../shared/Banner';
import ServicesSection from '../shared/ServicesSection';
import HelpedThousandsTeams from '../shared/HelpedThousandsTeams';
import HomeServices from '../shared/HomeServices';
import BecameMerchant from '../shared/BecameMerchant';
import HowItWorks from '../shared/HowItWorks';
import WhatCustomers from '../shared/WhatCustomers';
import FaqSection from '../shared/FaqSection';
import WhatOurSlider from '../shared/WhatOurSlider';

const Home = () => {
    return (
        <div>
           <header className='my-5'>
             <Banner></Banner>
           </header>
           <main>
            {/* how it works */}
            <HowItWorks></HowItWorks>
            {/* services section */}
            <ServicesSection></ServicesSection>
            {/* helped thousands teams */}
            <HelpedThousandsTeams></HelpedThousandsTeams>
            {/* home services */}
            <HomeServices></HomeServices>
            {/* merchant  */}
            <BecameMerchant></BecameMerchant>
            {/* what customers */}
            <WhatCustomers></WhatCustomers>
            {/* what slider */}
            <WhatOurSlider></WhatOurSlider>
            {/* faq section */}
            <FaqSection></FaqSection>
           </main>
        </div>
    );
};

export default Home;