import React from 'react';
import logo from "../../Assets/Logo/google.svg"
import {useSignInWithGoogle} from "react-firebase-hooks/auth"
import auth from '../../../firebase.init';
import { useNavigate } from 'react-router-dom';

const SocialLogin = () => {
    const [signInWithGoogle, user, loading, error] = useSignInWithGoogle(auth);
    const navigate =useNavigate();
    const handleSigninWithGoogle=()=>{
        signInWithGoogle();
        navigate('/');
    }
    return (
        <div>
            <div>
            <div className='d-flex justify-content-md-around align-items-center'>
                <div style={{ height: '1px' }} className='bg-primary w-50'>

                </div>
                <p className='mt-2 px-2 text-black-50'>or</p>
                <div style={{ height: '1px' }} className='bg-primary w-50'>

                </div>
            </div>
            <p className='text-primary fw-bold'>Login With</p>
            <div className='text-center my-2'>
                <div  onClick={handleSigninWithGoogle} role="button">
                    <img className='px-2' src={logo} alt="" />
                </div>
            </div>
            
        </div>
        </div>
    );
};

export default SocialLogin;