import React from 'react';
import { Container, Nav, Navbar } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import './Header.css'

const Header = () => {
    return (
        <>
            <Navbar bg="dark" variant="dark" className='sticky-top'>
                <Container>
                    <Navbar.Brand as={Link} to='/' className='site-title'>Healthy Bite</Navbar.Brand>
                    <Nav className="ms-auto">
                        <Nav.Link href="#home">Home</Nav.Link>
                        <Nav.Link href="#features">Services</Nav.Link>
                        <Nav.Link href="#pricing">Blogs</Nav.Link>
                        <Nav.Link href="#pricing">About Me</Nav.Link>
                        <Nav.Link as={Link} to='/login'>Login</Nav.Link>
                    </Nav>
                </Container>
            </Navbar></>
    );
};

export default Header;