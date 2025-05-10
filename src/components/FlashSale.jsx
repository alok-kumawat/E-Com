import React from "react";
import { Card, Button, Container } from "react-bootstrap";
import "./FlashSale.css";
import first from '../assets/firstflash.png';
import second from '../assets/secondflash.png';
import third from '../assets/thirdflash.png';
import fourth from '../assets/fourthflash.png';
import fifth from '../assets/fifthflash.png';
import sixth from '../assets/sixthflash.png';

const products = [
  {
    id: 1,
    title: "Wireless Headphones",
    price: "₹1,499",
    image: first,
  },
  {
    id: 2,
    title: "Smart Watch",
    price: "₹2,199",
    image: second,
  },
  {
    id: 3,
    title: "Sneakers",
    price: "₹1,299",
    image: third,
  },
  {
    id: 4,
    title: "T-Shirt Combo",
    price: "₹799",
    image: fourth,
  },
  {
    id: 5,
    title: "Bluetooth Speaker",
    price: "₹999",
    image: fifth,
  },
  {
    id: 6,
    title: "Backpack",
    price: "₹1,099",
    image: sixth,
  },
];

const FlashSale = () => {
  return (
    <Container className="my-5">
      <div className="d-flex justify-content-between align-items-center mb-3">
        <h4 className="fw-bold">Flash Sale</h4>
        <div className="text-danger fw-bold">Ends in: 02:15:30</div>
      </div>

      <div className=" d-flex custom-scrollbar ">
        {products.map((item) => (
          <Card key={item.id} className="me-3 flash-card">
            <Card.Img variant="top" src={item.image} />
            <Card.Body className="text-center">
              <Card.Title className="fs-6">{item.title}</Card.Title>
              <Card.Text className="fw-bold text-primary">{item.price}</Card.Text>
              <Button variant="outline-primary" size="sm">
                Buy Now
              </Button>
            </Card.Body>
          </Card>
        ))}
      </div>
    </Container>
  );
};

export default FlashSale;
