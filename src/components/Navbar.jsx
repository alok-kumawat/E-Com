import React from "react";
import { Navbar, Nav, Form, FormControl, Button, Container, NavDropdown } from "react-bootstrap";
import { FaUserCircle, FaShoppingCart } from "react-icons/fa";
import logo from '../assets/E-Logo.jpg';

const Header = () => {
  return (
    <Navbar bg="light" expand="lg" className="shadow-sm">
      <Container>
        {/* Brand/Logo */}
        <Navbar.Brand href="#" className="fw-bold fs-4">
          <div>
            <img src={logo} alt="logo" style={{ height: "50px", width: "60px", objectFit: "contain" }}/>
          </div>
        </Navbar.Brand>

        {/* Toggle button for mobile */}
        <Navbar.Toggle aria-controls="navbarScroll" />

        {/* Navbar content */}
        <Navbar.Collapse id="navbarScroll">
          {/* Search bar */}
          <Form className="d-flex mx-auto w-50">
            <FormControl
              type="search"
              placeholder="Search for products, brands and more"
              className="me-2"
              aria-label="Search"
            />
            <Button variant="outline-primary">Search</Button>
          </Form>

          {/* Right-side icons */}
          <Nav className="d-flex align-items-center">
            <Nav.Link href="#" className="d-flex align-items-center">
              <FaUserCircle size={20} className="me-1" />
              Login
            </Nav.Link>
            <Nav.Link href="#" className="d-flex align-items-center ms-2">
              <FaShoppingCart size={20} className="me-1" />
              Cart
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default Header;
