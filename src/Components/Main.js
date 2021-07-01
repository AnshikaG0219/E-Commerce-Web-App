import React from "react";
import "./css/main.css";
import { Carousel } from "react-bootstrap";
import ProductList from "./ProductList";
import AboutSmall from "./AboutSmall";

export default function Main() {
  return (
    <>
      <Carousel fade>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src="https://source.unsplash.com/1400x400/?library,books"
            alt="First slide"
          />
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src="https://source.unsplash.com/1400x400/?study,books"
            alt="Second slide"
          />
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src="https://source.unsplash.com/1400x400/?coffee,books"
            alt="Third slide"
          />
        </Carousel.Item>
      </Carousel>
      <span></span>
      <ProductList/>
      <AboutSmall/>
    </>
  );
}
