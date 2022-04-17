import React, { useState } from 'react';
import { Button, Form } from 'react-bootstrap';
import { useCreateUserWithEmailAndPassword } from 'react-firebase-hooks/auth';
import { Link, useNavigate } from 'react-router-dom';
import auth from '../../../firebase.init';
import './SignUp.css'


const SignUp = () => {
    const [
        createUserWithEmailAndPassword
    ] = useCreateUserWithEmailAndPassword(auth, { sendEmailVerification: true });
    const [email, setEmail] = useState({ value: "", error: "" });
    const [password, setPassword] = useState({ value: "", error: "" });
    const [checked, setChecked] = useState(false);
    const navigate = useNavigate();
    const handleEmail = (event) => {
        const emailInput = event.target.value;
        if (/\S+@\S+\.\S+/.test(emailInput)) {
            setEmail({ value: emailInput, error: "" })
        }
        else {
            setEmail({ email: "", error: "Please Provide a Valid Email" });
        }
    }
    const handlePassword = (event) => {
        const passInput = event.target.value;
        let pattern = new RegExp("^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#\$%\^&\*])(?=.{8,})");
        if (!pattern.test(passInput)) {
            setPassword({ value: "", error: "Your password should contain one uppercase,one lowercase,one number,and a special character and length should be 8." })
        }
        else {
            setPassword({ value: passInput, error: "" });
        }
    }

    const handleCreateUser = async (event) => {
        event.preventDefault();
        if (email.value && password.value) {
            await createUserWithEmailAndPassword(email.value, password.value);
            navigate('/');
        }
        else {
            return;
        }
    }
    return (
        <div className='container w-50 mx-auto mt-5 shadow-lg p-5 rounded-3 border'>
            <h2 className='text-primary fw-bold form-title'>Please Register!!</h2>
            <Form onSubmit={handleCreateUser}>
                <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Label>Email address</Form.Label>
                    <Form.Control onChange={handleEmail} type="email" placeholder="Enter email" required />
                    {
                        email.error && (<p className='text-danger mt-2'>{email.error}</p>)
                    }
                    <Form.Text className="text-muted">
                        We'll never share your email with anyone else.
                    </Form.Text>
                </Form.Group>

                <Form.Group className="mb-3" controlId="formBasicPassword">
                    <Form.Label>Password</Form.Label>
                    <Form.Control onChange={handlePassword} type="password" placeholder="Password" required />
                    {
                        password.error && (<p className='text-danger mt-2'>{password.error}</p>)
                    }
                </Form.Group>
                <input onClick={() => setChecked(!checked)} className='me-2' type="checkbox" name="terms" id="terms" />
                <label htmlFor="terms"><small>Accept Our Terms & Conditions. <span className='text-danger fw-bolder' role="button">Read the T&C</span></small></label>
                <br />
                <Button className={checked ? 'active' : 'disabled'} variant="primary" type="submit">
                    Sign Up
                </Button>
            </Form>
            <p className='alter-options'><small>Already Have an Account?</small><Link className='text-decoration-none ps-1' to='/login'>Login Here</Link></p>
        </div>
    );
};

export default SignUp;