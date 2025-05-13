import React, { useState } from "react";
import { Form, Button, Card, Container, Row, Col, Alert, InputGroup } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import { FaEnvelope, FaLock } from "react-icons/fa";
import "./Login.css";
import logo from "../assets/E-Logo.jpg";
import { useUser } from "../context/UserContext";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [validated, setValidated] = useState(false);
  const [error, setError] = useState("");
  const navigate = useNavigate();

  const { login } = useUser();
  const handleLogin = (e) => {
    e.preventDefault();
    if (!email || !password) {
      setError("Please fill in all fields.");
      return;
    }

    if (email === "alok@gmail.com" && password === "alok1234") {
          login(email);
      navigate("/");
    } else {
      setError("Invalid email or password.");
    }
  };

  return (
    <div className="login-bg">
      <Container className="d-flex justify-content-center align-items-center" style={{ minHeight: "100vh" }}>
        <Row className="w-100 justify-content-center">
          <Col md={6} lg={5}>
            <Card className="p-4 shadow login-card border-0 rounded-4 animate__animated animate__fadeIn">
              <div className="text-center mb-3">
                <img src={logo} alt="Logo" style={{ width: "60px" }} />
                <h4 className="mt-2 fw-bold">Welcome Back!</h4>
                <p className="text-muted small">Login to your account</p>
              </div>

              {error && <Alert variant="danger">{error}</Alert>}

              <Form noValidate validated={validated} onSubmit={handleLogin}>
                <Form.Group controlId="formEmail" className="mb-3">
                  <Form.Label>Email address</Form.Label>
                  <InputGroup>
                    <InputGroup.Text><FaEnvelope /></InputGroup.Text>
                    <Form.Control
                      type="email"
                      placeholder="Enter email"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      required
                    />
                  </InputGroup>
                </Form.Group>

                <Form.Group controlId="formPassword" className="mb-3">
                  <Form.Label>Password</Form.Label>
                  <InputGroup>
                    <InputGroup.Text><FaLock /></InputGroup.Text>
                    <Form.Control
                      type="password"
                      placeholder="Enter password"
                      value={password}
                      onChange={(e) => setPassword(e.target.value)}
                      required
                    />
                  </InputGroup>
                </Form.Group>

                <Button type="submit" variant="primary" className="w-100 login-btn">
                  Login
                </Button>

                <div className="text-center mt-3">
                  <small className="text-muted">Don't have an account? <a href="#">Register</a></small>
                </div>
              </Form>
            </Card>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default Login;
