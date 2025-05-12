import React from "react";
import { useCart } from "../context/CartContext";
import { Container, Row, Col, Button, Card } from "react-bootstrap";
import { motion } from "framer-motion";
import { FaTrash } from "react-icons/fa";

const CartPage = () => {
  const { cart, dispatch } = useCart();

  const calculateTotal = (item) => item.price * item.quantity;
  const grandTotal = cart.reduce((sum, item) => sum + calculateTotal(item), 0);

  return (
    <Container className="my-4">
      <h2 className="mb-4 text-center">🛒 Your Cart</h2>

      {cart.length === 0 ? (
        <p className="text-center">Your cart is empty.</p>
      ) : (
        <>
          {cart.map((item) => (
            <motion.div
              key={item.id}
              whileHover={{ scale: 1.02 }}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.3 }}
            >
              <Card className="mb-3 shadow-sm">
                <Card.Body>
                  <Row className="align-items-center">
                    <Col md={2}>
                      <img
                        src={item.image}
                        alt={item.name}
                        className="img-fluid rounded"
                        style={{ height: "80px", objectFit: "contain" }}
                      />
                    </Col>
                    <Col md={3}>
                      <Card.Title className="mb-0">{item.name}</Card.Title>
                    </Col>
                    <Col md={2}>₹{item.price.toFixed(2)}</Col>
                    <Col md={3} className="d-flex align-items-center">
                      <Button
                        size="sm"
                        variant="outline-secondary"
                        className="mx-1"
                        onClick={() => dispatch({ type: "DECREMENT", payload: item.id })}
                      >
                        −
                      </Button>
                      <span className="fw-bold">{item.quantity}</span>
                      <Button
                        size="sm"
                        variant="outline-secondary"
                        className="mx-1"
                        onClick={() => dispatch({ type: "INCREMENT", payload: item.id })}
                      >
                        +
                      </Button>
                    </Col>
                    <Col md={1}>₹{calculateTotal(item).toFixed(2)}</Col>
                    <Col md={1}>
                      <Button
                        variant="danger"
                        size="sm"
                        onClick={() => dispatch({ type: "REMOVE_ITEM", payload: item.id })}
                      >
                        <FaTrash />
                      </Button>
                    </Col>
                  </Row>
                </Card.Body>
              </Card>
            </motion.div>
          ))}

          {/* Grand Total */}
          <motion.div
            className="text-end mt-4 fs-5 fw-semibold"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.2 }}
          >
            Grand Total: ₹{grandTotal.toFixed(2)}
          </motion.div>
        </>
      )}
    </Container>
  );
};

export default CartPage;
