import React from "react";
import { Navbar, Nav, Container } from 'react-bootstrap';
import '../App.css';
import ShoppingCartSharpIcon from '@mui/icons-material/ShoppingCartSharp';


const Header = () => {

    return (
            <Navbar fixed="top" collapseOnSelect expand="lg" bg="dark" variant="dark">
                <Container>
                    <Navbar.Brand href="#home" className="logo"><ShoppingCartSharpIcon style={{ fontSize: 22 }}>logo</ShoppingCartSharpIcon>E-THRIFT</Navbar.Brand>
                    <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                    <Navbar.Collapse id="responsive-navbar-nav">
                        <Nav className="me-auto">
                        </Nav>
                        <Nav>
                            <Nav.Link href="#deets">Home</Nav.Link>
                            <Nav.Link href="#deets">Order Now</Nav.Link>
                            <Nav.Link href="#deets">Customer Care</Nav.Link>
                            <Nav.Link href="#deets">Cart</Nav.Link>
                            <Nav.Link href="#deets">About</Nav.Link>
                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
    )
}

export default Header;