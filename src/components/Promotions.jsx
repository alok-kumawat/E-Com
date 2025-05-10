import React from "react";
import { Container, Row, Col, Card, Badge } from "react-bootstrap";

const promotions = [
  {
    id: 1,
    image: "https://images.unsplash.com/photo-1542291026-7eec264c27ff?auto=format&fit=crop&w=600&q=80",
    label: "35% OFF",
  },
  {
    id: 2,
    image: "https://images.unsplash.com/photo-1557438159-51eec7a6c9e8?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTV8fHNtYXJ0JTIwd2F0Y2h8ZW58MHx8MHx8fDA%3D",
    label: "20% OFF",
  },
  {
    id: 3,
    image: "https://images.unsplash.com/photo-1614696131965-cc559b1ecad1?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8bGVkJTIwdHZ8ZW58MHx8MHx8fDA%3D",
    label: "50% OFF",
  },
  {
    id: 4,
    image: "https://images.unsplash.com/photo-1512436991641-6745cdb1723f?auto=format&fit=crop&w=600&q=80",
    label: "Buy 1 Get 1",
  },
  {
    id: 5,
    image: "https://images.unsplash.com/photo-1567306226416-28f0efdc88ce?auto=format&fit=crop&w=600&q=80",
    label: "Flat ₹99",
  },
  {
    id: 6,
    image: "https://media.istockphoto.com/id/1577689383/photo/happy-young-indian-couple-wearing-traditional-cloths-holding-shopping-bags-and-credit-debit.jpg?s=612x612&w=0&k=20&c=VJi-ux1QwRhdZoJaB9Hn0MItGzTM_1nwuDsSUj8Dqok=",
    label: "Festive Deal",
  },
];

const Promotions = () => {
  return (
    <Container className="my-5">
      <h4 className="fw-bold mb-4">Today's Promotions</h4>
      <Row className="g-3">
        {promotions.map((promo) => (
          <Col xs={12} sm={6} md={4} lg={2} key={promo.id}>
            <Card className="h-100 border-0 shadow-sm">
              <div style={{ position: "relative" }}>
                <Card.Img variant="top" src={promo.image} />
                <Badge
                  bg="danger"
                  style={{
                    position: "absolute",
                    top: "10px",
                    left: "10px",
                    fontSize: "0.8rem",
                    padding: "6px 10px",
                  }}
                >
                  {promo.label}
                </Badge>
              </div>
            </Card>
          </Col>
        ))}
      </Row>
    </Container>
  );
};

export default Promotions;
