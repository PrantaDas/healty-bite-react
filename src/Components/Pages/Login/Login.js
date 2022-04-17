import React, { useState } from 'react';
import { Button, Form } from 'react-bootstrap';
import { Link, useNavigate } from 'react-router-dom';
import SocialLogin from '../SocialLogin/SocialLogin';
import './Login.css'
import auth from '../../../firebase.init';
import { useSendPasswordResetEmail } from 'react-firebase-hooks/auth';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const Login = () => {
    const [sendPasswordResetEmail, sending, error] = useSendPasswordResetEmail(
        auth
      );
      const [email,setEmail]=useState({value:"",error:"",error1:""});
      const [password, setPassword] = useState({ value: "", error: "" });
      const navigate=useNavigate();
      const handleEmail = (event) => {
        const emailInput = event.target.value;
        if (/\S+@\S+\.\S+/.test(emailInput)) {
            setEmail({ value: emailInput, error: "",error1:"" })
        }
        else {
            setEmail({ email: "", error: "Please Provide Your Email",error1:"" });
        }
    }
    const handlePassword = (event) => {
        const passInput = event.target.value;
        let pattern = new RegExp("^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#\$%\^&\*])(?=.{8,})");
        if (!pattern.test(passInput)) {
            setPassword({ value: "", error: "Please Input Your Valid Password" })
        }
        else {
            setPassword({ value: passInput, error: "" });
        }
    }

    const handleResetPassword=()=>{
        if(email.value===""){
            setEmail({value:"",error:"",error1:"Please Provide Your Email First"});
        }
        else{
            sendPasswordResetEmail(email.value);
            toast.success('Reset Request Sent!',{
                theme:'colored',delay:1000
            })
        }
            
        }
    
    return (
        <div className='container w-50 mx-auto mt-5 shadow-lg p-5 rounded-3 border'>
            <h2 className='text-primary fw-bold form-title'>Please Login!!</h2>
            <Form >
                <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Label>Email address</Form.Label>
                    <Form.Control onChange={handleEmail} className='' type="email" placeholder="Enter email" required />
                    {
                        email.error1 && (<p className='text-danger' mt-2>{email.error1}</p>)
                    }
                    <Form.Text className="text-muted">
                        We'll never share your email with anyone else.
                    </Form.Text>
                </Form.Group>

                <Form.Group className="mb-3" controlId="formBasicPassword">
                    <Form.Label>Password</Form.Label>
                    <Form.Control onClick={handlePassword} className='' type="password" placeholder="Password" required />
                </Form.Group>
                <Button variant="primary" type="submit">
                    Submit
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