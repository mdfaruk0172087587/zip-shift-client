import React from 'react';
import locationMerchant from '../assets/location-merchant.png'
const BecameMerchant = () => {
    return (
        <div className='my-10 bg-[#03373D] rounded-4xl p-20 flex bg-[url(assets/be-a-merchant-bg.png)] bg-no-repeat'>
            <div className='space-y-4'>
                <h1 className='text-4xl font-extrabold text-white'>Merchant and Customer Satisfaction <br /> is Our First Priority</h1>
                <p className='text-lg text-[#DADADA]'>We offer the lowest delivery charge with the highest value along with <br /> 100% safety of your product. Pathao courier delivers your parcels in every <br /> corner of Bangladesh right on time.</p>
                <button className='bg-[#CAEB66] text-black rounded-full  px-4 py-2 mr-4'>Become a Merchant</button>
                <button className=' text-[#CAEB66] rounded-full  px-4 py-2 mr-4 outline'>Earn with Profast Courier</button>

            </div>
            <div>
                <img src={locationMerchant} alt="" />
            </div>
        </div>
    );
};

export default BecameMerchant;