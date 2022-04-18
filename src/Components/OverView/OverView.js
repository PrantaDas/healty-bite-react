import React from 'react';
import './OverView.css'
const OverView = () => {
    return (
        <div className='row g-5 container mt-5 ' style={{margin:'30px 90px'}}>
            <div className='overview-option col-lg-4 col-sm-12 d-flex flex-column justify-content-center align-items-center shadow'>
                <p className='fs-1 fw-bold text-info'>30+</p>
                <p className='fw-bold fs-3 text-success'>Enriched Facilities</p>
            </div>
            <div className='overview-option col-lg-4 col-sm-12 d-flex flex-column justify-content-center align-items-center shadow'>
                <p className='fs-1 fw-bold text-info col-lg-4'>1200+</p>
                <p className='fw-bold fs-3 text-success'>Recovered Patient</p>
            </div>
            <div className='overview-option col-lg-4 col-sm-12 d-flex flex-column justify-content-center align-items-center shadow'>
                <p className='fs-1 fw-bold text-info col-lg-4'>24/7</p>
                <p className='fw-bold fs-3 text-success'>Dedicated Service</p>
            </div>
        </div>
    );
};

export default OverView;