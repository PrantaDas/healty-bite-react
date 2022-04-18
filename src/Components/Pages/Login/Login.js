import React, { useState } from 'react';
import { Button, Form } from 'react-bootstrap';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import SocialLogin from '../SocialLogin/SocialLogin';
import './Login.css'
import auth from '../../../firebase.init';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { sendPasswordResetEmail, signInWithEmailAndPassword } from "firebase/auth";

const Login = () => {
    const [email, setEmail] = useState({ value: "", error1: "" });
    const [password, setPassword] = useState({ value: "", error2: "" });
    const navigate = useNavigate();
    const location=useLocation();

    let from = location.state?.from?.pathname || "/";

    const handleEmail = (event) => {
        const emailInput = event.target.value;
        setEmail({ value: emailInput, error1: "" });
    }
    const handlePassword = (event) => {
        const passInput = event.target.value;

        setPassword({ value: passInput, error2: "" });

    }

    const handleResetPassword = () => {
        if (email.value === "") {
            setEmail({ value: "", error1: "Please Provide Your Email First" });
        }
        else {
            sendPasswordResetEmail(auth, email.value)
                .then(() => {
                    toast.success("Reset Request Sent !", {
                        theme: 'colored'
                    })
                })
                .catch(error => {
                    console.log(error, 'error');
                    const errorMessage = error.message;
                    if (errorMessage.includes('auth/user-not-found')) {
                        toast.error('User Not Found', {
                            theme: 'colored'
                        })
                    }

                })
        }

    }


    const handleLogin = (event) => {
        event.preventDefault();
        if (email.value && password.value === "") {
            toast.warning('Input eamil and password first', {
                theme: 'colored'
            })
        }

        if (email.value && password.value) {
            signInWithEmailAndPassword(auth, email.value, password.value)
                .then(userCredential => {
                    // navigate('/');
                    navigate(from, { replace: true });

                })
                .catch((error) => {
                    const errorMessage = error.message;
                    console.log(error);
                    if (errorMessage.includes('auth/wrong-password')) {
                        toast.error('Invalid Password', {
                            theme: 'colored'
                        })
                    }
                    if (errorMessage.includes('auth/user-not-found')) {
                        toast.error('User Not Found', {
                            theme: 'colored'
                        })
                    }
                })

        }

    }

    return (
        <div className='container w-50 mx-auto mt-5 shadow-lg p-5 rounded-3 border'>
            <h2 className='text-primary fw-bold form-title'>Please Login!!</h2>
            <Form onSubmit={handleLogin}>
                <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Label>Email address</Form.Label>
                    <Form.Control onChange={handleEmail} className='' type="email" placeholder="Enter email" required />
                    {/* {
                            email.error && (<p className='text-danger' mt-2>{email.error}</p>)
                        } */}
                    {
                        email.error1 && (<p className='text-danger' mt-2>{email.error1}</p>)
                    }
                    <Form.Text className="text-muted">
                        We'll never share your email with anyone else.
                    </Form.Text>
                </Form.Group>

                <Form.Group className="mb-3" controlId="formBasicPassword">
                    <Form.Label>Password</Form.Label>
                    <Form.Control onChange={handlePassword} className='' type="password" placeholder="Password" required />
                    {
                        password.error2 ? (<p className='text-danger' mt-2>{password.error2}</p>) : ""
                    }
                </Form.Group>
                <Button variant="primary" type="submit">
                    LogIn
                </Button>
            </Form>
            <p className='alter-options'><small>New to Healthy Bite?</small><Link className='text-decoration-none ps-1' to='/signup'>Register Here.</Link></p>
            <p className='alter-options'><small>Forget Password?</small><span onClick={handleResetPassword} className='text-primary px-1' role='button' >Reset password.</span></p>
            <ToastContainer></ToastContainer>
            <SocialLogin></SocialLogin>

        </div>
    );
};

export default Login;