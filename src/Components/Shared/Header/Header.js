import { signOut } from 'firebase/auth';
import React from 'react';
import { Container, Nav, Navbar, NavDropdown } from 'react-bootstrap';
import { useAuthState } from 'react-firebase-hooks/auth';
import { Link, useNavigate } from 'react-router-dom';
import auth from '../../../firebase.init';
import './Header.css'

const Header = () => {
    const [user, loading, error] = useAuthState(auth);
    const navigate = useNavigate();
    const handleSignout = () => {
        signOut(auth)
            .then(() => {
                navigate('/login');
            })
    }
    return (
        <>
            {/* <Navbar bg="dark" variant="dark" className='sticky-top'>
                <Container>
                    <Navbar.Brand as={Link} to='/' className='site-title'>Healthy Bite</Navbar.Brand>
                    <Nav className="ms-auto">
                        <Nav.Link as={Link} to='/'>Home</Nav.Link>
                        <Nav.Link as={Link} to='/services'>Services</Nav.Link>
                        <Nav.Link as={Link} to='/blog'>Blogs</Nav.Link>
                        <Nav.Link as={Link} to='/about'>About Me</Nav.Link>
                        {
                            user ? <Nav.Link onClick={handleSignout}>Logout</Nav.Link> : <Nav.Link as={Link} to='/login'>Login</Nav.Link>
                        }
                    </Nav>
                </Container>
            </Navbar> */}
            <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
                <Container>
                    <Navbar.Brand as={Link} to='/' className='site-title'>Healthy Bite</Navbar.Brand>
                    <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                    <Navbar.Collapse id="responsive-navbar-nav">
                        <Nav className="me-auto">
                            <Nav.Link as={Link} to='/services'>Services</Nav.Link>
                            <Nav.Link as={Link} to='/blog'>Blog</Nav.Link>
                            <NavDropdown title="Dropdown" id="collasible-nav-dropdown">
                                <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
                                <NavDropdown.Item href="#action/3.2">Another action</NavDropdown.Item>
                                <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
                                <NavDropdown.Divider />
                                <NavDropdown.Item href="#action/3.4">Separated link</NavDropdown.Item>
                            </NavDropdown>
                        </Nav>
                        <Nav>
                            <Nav.Link as={Link} to='/about'>About Me</Nav.Link>
                            {
                                user ? <Nav.Link onClick={handleSignout}>Logout</Nav.Link> : <Nav.Link as={Link} to='/login'>Login</Nav.Link>
                            }
                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </>
    );
};

export default Header;