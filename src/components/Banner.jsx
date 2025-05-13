import React from "react";
import './Banner.css';
import { Carousel, Container } from "react-bootstrap";
import firsts from '../assets/firstslide.png';
import seconds from '../assets/secondslide.png';
import thirds from '../assets/thirdslide.png';

const Banner = () => {
  return (
    <Container className="banner-container">
      <Carousel fade>
        <Carousel.Item>
          <img
            className="banner-img"
            src={firsts}
            alt="First slide"
          />
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="banner-img"
            src={seconds}
            alt="Second slide"
          />
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="banner-img"
            src={thirds}
            alt="Third slide"
          />
        </Carousel.Item>
      </Carousel>
    </Container>
  );
};

export default Banner;
