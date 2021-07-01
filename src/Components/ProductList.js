import React from "react";
import { Card, CardDeck, Button } from "react-bootstrap";

export default function ProductList() {
  return (
    <>
    <div className="container my-4">
      <CardDeck>
        <Card>
          <Card.Img
            variant="top"
            src="https://source.unsplash.com/400x300/?study,books"
          />
          <Card.Body>
            <Card.Title className="text-center">Book 1</Card.Title>
            <Card.Text className="text-center">
            ₹0
            </Card.Text>
            <Button variant="success" size="lg" block>Add to Cart</Button>
          </Card.Body>
        </Card>
        <Card>
          <Card.Img
            variant="top"
            src="https://source.unsplash.com/400x300/?books,books"
          />
          <Card.Body>
            <Card.Title className="text-center">Book 2</Card.Title>
            <Card.Text className="text-center">
            ₹0
            </Card.Text>
            <Button variant="success" size="lg" block>Add to Cart</Button>
          </Card.Body>
        </Card>
        <Card>
          <Card.Img
            variant="top"
            src="https://source.unsplash.com/400x300/?pen,books"
          />
          <Card.Body>
            <Card.Title className="text-center">Book 3</Card.Title>
            <Card.Text className="text-center">
            ₹0
            </Card.Text>
            <Button variant="success" size="lg" block>Add to Cart</Button>
          </Card.Body>
        </Card>
        <Card>
          <Card.Img
            variant="top"
            src="https://source.unsplash.com/400x300/?desk,books"
          />
          <Card.Body>
            <Card.Title className="text-center">Book 4</Card.Title>
            <Card.Text className="text-center">
            ₹0
            </Card.Text>
            <Button variant="success" size="lg" block>Add to Cart</Button>
          </Card.Body>
        </Card>
      </CardDeck>
    </div>
    </>
  );
}
