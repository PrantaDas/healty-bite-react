import React from 'react';
import { Button } from 'react-bootstrap';
import { Link, useParams } from 'react-router-dom';

const ServiceDetail = () => {
    const {serviceId}=useParams();
    return (
        <div>
            <p>This is my service detail</p>
            <Link to='/checkout'>
            <Button variant='primary'>CheckOut</Button>
            </Link>
        </div>
    );
};

export default ServiceDetail;