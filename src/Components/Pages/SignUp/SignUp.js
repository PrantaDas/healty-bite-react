import React from 'react';
import { Button, Form } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import './SignUp.css'

const SignUp = () => {
    return (
        <div className='container w-50 mx-auto mt-5 shadow-lg p-5 rounded-3 border'>
            <h2 className='text-primary fw-bold form-title'>Please Register!!</h2>
            <Form >
                <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Label>Email address</Form.Label>
                    <Form.Control  type="email" placeholder="Enter email" required />
                    <Form.Text className="text-muted">
                        We'll never share your email with anyone else.
                    </Form.Text>
                </Form.Group>

                <Form.Group className="mb-3" controlId="formBasicPassword">
                    <Form.Label>Password</Form.Label>
                    <Form.Control  type="password" placeholder="Password" required />
                </Form.Group>
                <input  className='me-2' type="checkbox" name="terms" id="terms" />
                <label  htmlFor="terms"><small>Accept Our Terms & Conditions. <span className='text-danger fw-bolder' role="button">Read the T&C</span></small></label>
                <br />
                <Button variant="primary" type="submit">
                    Sign Up
                </Button>
            </Form>
            <p className='alter-options'><small>Already Have an Account?</small><Link className='text-decoration-none ps-1' to='/login'>Login Here</Link></p>
        </div>
    );
};

export default SignUp;