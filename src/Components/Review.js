import React from "react";
import { Col, Row, Container, Image } from "react-bootstrap";
import quote from "./Images/review.png";
import "./css/review.css";

export default function Review() {
  return (
    <div className="my-3 review text-white">
      <h2 className="display-4 head pt-4">Reviews</h2>
      <Container className="my-2 content">
        <Row className="pb-4">
          <Col xs={6} md={4}>
            <Image src={quote} className="quote" alt="Quote png" />
            <p className="container">
              I'm a review. Click to edit me and add text that says something
              nice about you and your work. Share a bit of critical acclaim and
              spur some excitement for your latest project.
            </p>
          </Col>
          <Col xs={6} md={4}>
            <Image src={quote} className="quote" alt="Quote png" />
            <p className="container">
              I'm a review. Click to edit me and add text that says something
              nice about you and your work. Share a bit of critical acclaim and
              spur some excitement for your latest project.
            </p>
          </Col>
          <Col xs={6} md={4}>
            <Image src={quote} className="quote" alt="Quote png" />
            <p className="container">
              I'm a review. Click to edit me and add text that says something
              nice about you and your work. Share a bit of critical acclaim and
              spur some excitement for your latest project.
            </p>
          </Col>
        </Row>
      </Container>
    </div>
  );
}
