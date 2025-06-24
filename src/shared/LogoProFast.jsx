import React from 'react';
import { Link } from 'react-router';

const LogoProFast = () => {
    return (
       <Link to='/'>
        <div className='flex items-end'>
            <img className='mb-2' src="/src/assets/logo.png" alt="" />
            <p className='text-3xl font-extrabold -ml-4'>ProFast</p>
        </div>
       </Link>
    );
};

export default LogoProFast;