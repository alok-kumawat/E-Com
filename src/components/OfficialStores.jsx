import React from "react";
import { Container, Row, Col, Card } from "react-bootstrap";
import "./OfficialStores.css";
import aukey from '../assets/aukey.png';
import three from '../assets/threesecondofficial.png';
import sam from '../assets/samsung.png';
import ace from '../assets/ace.png';
import philips from '../assets/philips.png';
import wings from '../assets/wingsfood.png';

const officialBrands = [
  {
    id: 1,
    name: "Aukey",
    logo: aukey,
  },
  {
    id: 2,
    name: "3Second Official",
    logo: three,
  },
  {
    id: 3,
    name: "Samsung",
    logo: sam,
  },
  {
    id: 4,
    name: "ACE Indonesia",
    logo: ace,
  },
  {
    id: 5,
    name: "Philips",
    logo: philips,
  },
  {
    id: 6,
    name: "Wings Food",
    logo: wings,
  },
];

const OfficialStores = () => {
  return (
    <Container className="my-5">
      <h4 className="fw-bold mb-4">Official Store</h4>
      <Row className="g-3 justify-content-center">
        {officialBrands.map((brand) => (
          <Col xs={6} sm={4} md={2} key={brand.id}>
            <Card className="text-center p-3 border-0 shadow-sm h-100">
              <div className="brand-logo-wrapper">
                <Card.Img
                  variant="top"
                  src={brand.logo}
                  className="brand-logo"
                />
              </div>
              <Card.Body>
                <Card.Title className="fs-6">{brand.name}</Card.Title>
              </Card.Body>
            </Card>
          </Col>
        ))}
      </Row>
    </Container>
  );
};

export default OfficialStores;
