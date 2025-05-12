import React, { useState } from "react";
import { Container, Row, Col, Form, Button, Alert } from "react-bootstrap";
import {
  FaFacebookF,
  FaTwitter,
  FaInstagram,
  FaLinkedinIn,
} from "react-icons/fa";

const Footer = () => {
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState({ type: "", text: "" });

  const handleSubscribe = async (e) => {
  e.preventDefault();

  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (!emailRegex.test(email)) {
    setMessage({ type: "danger", text: "Please enter a valid email address." });
    return;
  }

  try {
    const res = await fetch("http://localhost:5000/api/subscribe", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ email }),
    });

    const data = await res.json();

    if (res.ok) {
      setMessage({ type: "success", text: data.message });
      setEmail("");
    } else {
      setMessage({ type: "danger", text: data.message || "Subscription failed." });
    }
  } catch (error) {
    console.error("Subscription error:", error);
    setMessage({ type: "danger", text: "Something went wrong. Please try again later." });
  }

  setTimeout(() => setMessage({ type: "", text: "" }), 3000);
  };


  return (
    <footer className="bg-dark text-light pt-5 mt-5">
      <Container>
        {/* Newsletter Subscription */}
        <Row className="mb-5 justify-content-center">
          <Col md={8} className="text-center">
            <h5 className="mb-3">Subscribe to our Newsletter</h5>
            <p className="text-muted mb-4">Get the latest updates on new products and upcoming sales</p>
            {message.text && (
              <Alert variant={message.type} className="py-2">{message.text}</Alert>
            )}
            <Form className="d-flex flex-column flex-sm-row justify-content-center gap-2" onSubmit={handleSubscribe}>
              <Form.Control
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Enter your email"
                className="me-sm-2"
              />
              <Button variant="primary" type="submit">
                Subscribe
              </Button>
            </Form>
          </Col>
        </Row>

        {/* Footer Links */}
        <Row className="mb-4">
          <Col md={3} sm={6} className="mb-3">
            <h5>Company</h5>
            <ul className="list-unstyled">
              <li><a href="#" className="text-light text-decoration-none">About Us</a></li>
              <li><a href="#" className="text-light text-decoration-none">Careers</a></li>
              <li><a href="#" className="text-light text-decoration-none">Blog</a></li>
              <li><a href="#" className="text-light text-decoration-none">Press</a></li>
            </ul>
          </Col>

          <Col md={3} sm={6} className="mb-3">
            <h5>Support</h5>
            <ul className="list-unstyled">
              <li><a href="#" className="text-light text-decoration-none">Help Center</a></li>
              <li><a href="#" className="text-light text-decoration-none">Returns</a></li>
              <li><a href="#" className="text-light text-decoration-none">Track Orders</a></li>
              <li><a href="#" className="text-light text-decoration-none">Shipping Info</a></li>
            </ul>
          </Col>

          <Col md={3} sm={6} className="mb-3">
            <h5>Contact</h5>
            <ul className="list-unstyled">
              <li>Email: support@e-com.com</li>
              <li>Phone: +91 12345 67890</li>
              <li>Mon-Fri: 9am - 6pm</li>
            </ul>
          </Col>

          <Col md={3} sm={6} className="mb-3">
            <h5>Follow Us</h5>
            <div className="d-flex gap-3">
              <a href="#" className="text-light fs-5"><FaFacebookF /></a>
              <a href="#" className="text-light fs-5"><FaTwitter /></a>
              <a href="#" className="text-light fs-5"><FaInstagram /></a>
              <a href="#" className="text-light fs-5"><FaLinkedinIn /></a>
            </div>
          </Col>
        </Row>

        <Row>
          <Col className="text-center text-muted">
            <small>© {new Date().getFullYear()} E-Com. All rights reserved.</small>
          </Col>
        </Row>
      </Container>
    </footer>
  );
};

export default Footer;
