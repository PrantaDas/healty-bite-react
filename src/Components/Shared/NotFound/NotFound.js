import React from 'react';
import notfound from '../../Assets/NotFound/404.jpg'

const NotFound = () => {
    return (
        <div>
             <div className='container-fluid'>
            <h2>Opps!! Results not found..</h2>
            <div>
            <img  className='w-100' style={{height:'80vh'}} src={notfound} alt="" />
            </div>
        </div>
        </div>
    );
};

export default NotFound;