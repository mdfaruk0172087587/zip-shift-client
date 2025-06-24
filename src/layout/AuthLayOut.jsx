import React from 'react';
import { Outlet } from 'react-router';
import loginImage from '../assets/authImage.png';
import LogoProFast from '../shared/LogoProFast';
const AuthLayOut = () => {
    return (
        <div className=" bg-base-200 p-12">
            <LogoProFast></LogoProFast>
            <div className="hero-content flex-col lg:flex-row-reverse">
                <div className='flex-1'>
                    <img
                    src={loginImage}
                    className="max-w-sm rounded-lg shadow-2xl"
                />
                </div>
                <div className='flex-1'>
                    <Outlet></Outlet>
                </div>
            </div>
        </div>
    );
};

export default AuthLayOut;