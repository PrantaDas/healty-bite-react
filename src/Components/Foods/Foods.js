import React, { useEffect, useState } from 'react';
import Food from '../Food/Food';

const Foods = () => {
    const [foods, setFoods] = useState([]);
    useEffect(() => {
        fetch('service2.json')
            .then(res => res.json())
            .then(data => setFoods(data))
    }, [])
    return (
        <div className='my-5'>
            <p className='fs-3 fw-bold text-success'>Organic Food Supply</p>
            <div className='row g-5 mx-auto container'>
                {
                    foods.map(food => <Food key={food._id} food={food}></Food>)
                }
            </div>
        </div>
    );
};

export default Foods;