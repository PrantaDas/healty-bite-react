import React, { useEffect, useState } from 'react';
import CheckUp from '../CheckUp/CheckUp';

const CheckUps = () => {
    const [checkups, setCheckups] = useState([]);
    useEffect(() => {
        fetch('service3.json')
            .then(res => res.json())
            .then(data => setCheckups(data));
    }, [])
    return (
        <div className=''>
            <p className='fs-3 fw-bold text-success'>Counselling <small className='fs-6 p-2 fw-bold'>& </small> Subscription</p>
            <div className='row g-5 mx-auto container'>
                {
                   checkups.map(checkup=><CheckUp key={checkup._id} checkup={checkup}></CheckUp>)
                }
            </div>
        </div>
    );
};

export default CheckUps;