import React, { useEffect, useState } from 'react';

const Overview = () => {
    const [overview, setOverview] = useState([]);
    useEffect(() => {
        fetch('https://dark-fangs-43312.herokuapp.com/orders')
            .then(res => res.json())
            .then(data => setOverview(data));
    }, [])
    return (
        <div>
            <h1 className='text-center'>Overview</h1>
            <h1>Total Order For Review: {overview.length}</h1>
        </div>
    );
};

export default Overview;