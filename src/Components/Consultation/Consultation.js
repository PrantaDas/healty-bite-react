import React from 'react';
import { Button, Card } from 'react-bootstrap';
import { Link, useNavigate } from 'react-router-dom';
import './Consultation.css'

const Consultation = ({ consultation }) => {
    const { name, price, picture, description,_id } = consultation;
    const navigate=useNavigate();
    const handleDetail=(id)=>{
        navigate(`/services/${_id}`);
    }
    return (
        <div className='col-lg-4 col-sm-12'>
            <Card className='card-container' style={{ width: '18rem' }}>
                <Card.Img style={{width:'281px',height:'191px'}} variant="top" src={picture} />
                <Card.Body>
                    <Card.Title className='text-info font-bold fs-4'>{name}</Card.Title>
                    <Card.Title className='text-warning fs-5'>Price:{price}</Card.Title>
                    <Card.Text>
                        {description}
                    </Card.Text>
                    <Button onClick={()=>handleDetail(_id)} variant="primary">Book Now</Button>
                </Card.Body>
            </Card>
        </div>
    );
};

export default Consultation;