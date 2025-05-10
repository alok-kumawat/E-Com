import React from "react";
import { Carousel, Container } from "react-bootstrap";
import firsts from '../assets/firstslide.png';
import seconds from '../assets/secondslide.png';
import thirds from '../assets/thirdslide.png';

const Banner = () => {
  return (
    <Container fluid className="px-0">
      <Carousel fade>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src={firsts}
            alt="First slide"
          />
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src={seconds}
            alt="Second slide"
          />
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src={thirds}
            alt="Third slide"
          />
        </Carousel.Item>
      </Carousel>
    </Container>
  );
};

export default Banner;
