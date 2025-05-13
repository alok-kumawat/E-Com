import React from "react";
import { Container, Row, Col, Card } from "react-bootstrap";
import { Link } from "react-router-dom";
const categories = [
  {
    id: 1,
    name: "Mobile",
    image: "https://cdn-icons-png.flaticon.com/128/186/186239.png",
  },
  {
    id: 2,
    name: "Appliances",
    image: "https://cdn-icons-png.flaticon.com/128/1261/1261106.png",
  },
  {
    id: 3,
    name: "Fashion",
    image: "https://cdn-icons-png.flaticon.com/128/7417/7417708.png",
  },
  {
    id: 4,
    name: "Grocery",
    image: "https://cdn-icons-png.flaticon.com/128/5346/5346571.png",
  },
  {
    id: 5,
    name: "Toys",
    image: "https://cdn-icons-png.flaticon.com/128/3799/3799116.png",
  },
  {
    id: 6,
    name: "Beauty",
    image: "https://cdn-icons-png.flaticon.com/128/1807/1807383.png",
  },
];

const PopularCategories = () => {
  return (
    <Container className="my-5">
      <h4 className="fw-bold mb-4">Popular Categories</h4>
      <Row className="g-3 text-center">
        {categories.map((category) => (
          <Col xs={3} sm={3} md={2} key={category.id}>
            <Link to={`category/${category.name}`}>

            <Card className="border-0">
              <Card.Img 
                variant="top"
                src={category.image}
                style={{ width: "60px", height: "60px", objectFit: "contain", margin: "auto" }}
                />
              <Card.Body className="p-2">
                <Card.Text className="small">{category.name}</Card.Text>
              </Card.Body>
            </Card>
                </Link>
          </Col>
        ))}
      </Row>
    </Container>
  );
};

export default PopularCategories;
