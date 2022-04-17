import { signOut } from 'firebase/auth';
import React from 'react';
import { Container, Nav, Navbar } from 'react-bootstrap';
import { useAuthState } from 'react-firebase-hooks/auth';
import { Link, useNavigate } from 'react-router-dom';
import auth from '../../../firebase.init';
import './Header.css'

const Header = () => {
    const [user, loading, error] = useAuthState(auth);
    const navigate=useNavigate();
    const handleSignout=()=>{
        signOut(auth)
        .then(()=>{
            navigate('/login');
        })
    }
    return (
        <>
            <Navbar bg="dark" variant="dark" className='sticky-top'>
                <Container>
                    <Navbar.Brand as={Link} to='/' className='site-title'>Healthy Bite</Navbar.Brand>
                    <Nav className="ms-auto">
                        <Nav.Link as={Link} to='/'>Home</Nav.Link>
                        <Nav.Link as={Link} to='/services'>Services</Nav.Link>
                        <Nav.Link as={Link} to='/blog'>Blogs</Nav.Link>
                        <Nav.Link as={Link} to='/about'>About Me</Nav.Link>
                        {
                            user ? <Nav.Link onClick={handleSignout}>Logout</Nav.Link> :<Nav.Link as={Link} to='/login'>Login</Nav.Link>
                        }
                    </Nav>
                </Container>
            </Navbar></>
    );
};

export default Header;