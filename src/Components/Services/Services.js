import React from 'react';
import CheckUps from '../CheckUps/CheckUps';
import Consultations from '../Consultations/Consultations';
import Foods from '../Foods/Foods';

const Services = () => {
    return (
        <div>
            <p className='text-primary fs-1 fw-bold'>Services</p>
            <hr className='w-50 mx-auto bg-info px-5' style={{ height: '2px' }} />
            <Consultations></Consultations>
            <Foods></Foods>
            <CheckUps></CheckUps>
        </div>
    );
};

export default Services;