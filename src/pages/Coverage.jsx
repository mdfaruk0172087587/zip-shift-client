import React from 'react';
import { useLoaderData } from 'react-router';
import BangladeshMap from '../coverage/BangladeshMap';

const Coverage = () => {
    const coverage = useLoaderData();
    
    return (
        <div>
            <h1>We are available in 64 districts</h1>
            <BangladeshMap coverage={coverage}></BangladeshMap>
        </div>
    );
};

export default Coverage;