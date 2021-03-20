import React from 'react';
import { Container, Nav, Navbar } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import logo from '../../images/Urban Riders.png'
const Navigation = () => {
    return (
        <Navbar expand="lg" className="mb-3">
            <Container className="border-bottom">
                <Navbar.Brand href="/home"><img src={logo} alt="Logo" style={{ maxWidth: '120px' }} /></Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="ml-auto">
                        <Link to="/home" className="nav-link">Home</Link>
                        <Link to="/destination" className="nav-link">Destination</Link>
                        <Link to="/blog" className="nav-link">Blog</Link>
                        <Link to="/signup" className="nav-link">Contact</Link>
                        <Link to="/login" className="nav-link">Login</Link>
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    );
};

export default Navigation;