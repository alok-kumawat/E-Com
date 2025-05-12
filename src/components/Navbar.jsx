import React, { useState } from "react";
import { Link } from "react-router-dom";
import { Navbar, Nav, Form, FormControl, Button, Container, NavDropdown } from "react-bootstrap";
import { FaUserCircle, FaShoppingCart } from "react-icons/fa";
import logo from '../assets/E-Logo.jpg';
import { useCart } from "../context/CartContext";


const Header = ({onSearch}) => {
  const [query, setQuery] = useState("");

  const { cart } = useCart();
  const totalItems = cart.reduce((acc, item) => acc + item.quantity, 0);

  const handleSubmit = (e) => {
    e.preventDefault();
    onSearch(query);
  };

  return (
    <Navbar bg="light" expand="lg" className="shadow-sm sticky-top">
      <Container>
        {/* Brand/Logo */}
        <Navbar.Brand href="/" className="fw-bold fs-4">
          <div>
            <img src={logo} alt="logo" style={{ height: "50px", width: "60px", objectFit: "contain" }}/>
          </div>
        </Navbar.Brand>

        {/* Toggle button for mobile */}
        <Navbar.Toggle aria-controls="navbarScroll" />

        {/* Navbar content */}
        <Navbar.Collapse id="navbarScroll">
          {/* Search bar */}
          <Form onSubmit={handleSubmit} className="d-flex mx-auto w-50">
            <FormControl
              type="search"
              placeholder="Search for products..."
              className="me-2"
              aria-label="Search"
              value={query}
              onChange={(e) => setQuery(e.target.value)}
            />
            <Button type="submit" variant="primary">Search</Button>
          </Form>

          {/* Right-side icons */}
          <Nav className="d-flex align-items-center">
            <Nav.Link href="#" className="d-flex align-items-center">
              <FaUserCircle size={20} className="me-1" />
              Login
            </Nav.Link>
            <Link to="/cart" className="nav-link d-flex align-items-center ms-2 position-relative">
              <FaShoppingCart size={20} className="me-1" />
              Cart
              {totalItems > 0 && (
                <span
                  className="position-absolute top-3 start-100 translate-middle badge rounded-pill bg-danger"
                  style={{ fontSize: "0.6rem" }}
                >
                  {totalItems}
                </span>
              )}
            </Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default Header;
