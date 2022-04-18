import React, { useEffect, useState } from 'react';
import Consultation from '../Consultation/Consultation';

const Consultations = () => {
    const [consultaions, setConsultation] = useState([]);
    useEffect(() => {
        fetch('service1.json')
            .then(res => res.json())
            .then(data => setConsultation(data));
    }, [])
    return (
        <div className=''>
            <p className='fs-3 fw-bold text-success'>Consultation</p>
            <div className='row g-5 mx-auto container'>
                {
                    consultaions.map(consultation => <Consultation key={consultation._id} consultation={consultation}></Consultation>)
                }
            </div>
        </div>
    );
};

export default Consultations;