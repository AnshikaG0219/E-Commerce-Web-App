import React from "react";
import Footer from "./Footer";
import { Card,CardDeck,Button,Container } from "react-bootstrap";

export default function Shop() {
  return (
    <>
    <Container className="my-4">
    <CardDeck className="my-3">
        <Card>
          <Card.Img
            variant="top"
            src="https://source.unsplash.com/400x300/?study,books"
          />
          <Card.Body>
            <Card.Title className="text-center">Book 1</Card.Title>
            <Card.Text className="text-center">₹0</Card.Text>
            <Button variant="info" size="lg" block>
              Add to Cart
            </Button>
          </Card.Body>
        </Card>
        <Card>
          <Card.Img
            variant="top"
            src="https://source.unsplash.com/400x300/?books,books"
          />
          <Card.Body>
            <Card.Title className="text-center">Book 2</Card.Title>
            <Card.Text className="text-center">₹0</Card.Text>
            <Button variant="info" size="lg" block>
              Add to Cart
            </Button>
          </Card.Body>
        </Card>
        <Card>
          <Card.Img
            variant="top"
            src="https://source.unsplash.com/400x300/?pen,books"
          />
          <Card.Body>
            <Card.Title className="text-center">Book 3</Card.Title>
            <Card.Text className="text-center">₹0</Card.Text>
            <Button variant="info" size="lg" block>
              Add to Cart
            </Button>
          </Card.Body>
        </Card>
        <Card>
          <Card.Img
            variant="top"
            src="https://source.unsplash.com/400x300/?desk,books"
          />
          <Card.Body>
            <Card.Title className="text-center">Book 4</Card.Title>
            <Card.Text className="text-center">₹0</Card.Text>
            <Button variant="info" size="lg" block>
              Add to Cart
            </Button>
          </Card.Body>
        </Card>
      </CardDeck>
    <CardDeck className="my-3">
        <Card>
          <Card.Img
            variant="top"
            src="https://source.unsplash.com/400x300/?study,books"
          />
          <Card.Body>
            <Card.Title className="text-center">Book 5</Card.Title>
            <Card.Text className="text-center">₹0</Card.Text>
            <Button variant="info" size="lg" block>
              Add to Cart
            </Button>
          </Card.Body>
        </Card>
        <Card>
          <Card.Img
            variant="top"
            src="https://source.unsplash.com/400x300/?books,books"
          />
          <Card.Body>
            <Card.Title className="text-center">Book 6</Card.Title>
            <Card.Text className="text-center">₹0</Card.Text>
            <Button variant="info" size="lg" block>
              Add to Cart
            </Button>
          </Card.Body>
        </Card>
        <Card>
          <Card.Img
            variant="top"
            src="https://source.unsplash.com/400x300/?pen,books"
          />
          <Card.Body>
            <Card.Title className="text-center">Book 7</Card.Title>
            <Card.Text className="text-center">₹0</Card.Text>
            <Button variant="info" size="lg" block>
              Add to Cart
            </Button>
          </Card.Body>
        </Card>
        <Card>
          <Card.Img
            variant="top"
            src="https://source.unsplash.com/400x300/?desk,books"
          />
          <Card.Body>
            <Card.Title className="text-center">Book 8</Card.Title>
            <Card.Text className="text-center">₹0</Card.Text>
            <Button variant="info" size="lg" block>
              Add to Cart
            </Button>
          </Card.Body>
        </Card>
      </CardDeck>
    <CardDeck className="my-3">
        <Card>
          <Card.Img
            variant="top"
            src="https://source.unsplash.com/400x300/?study,books"
          />
          <Card.Body>
            <Card.Title className="text-center">Book 9</Card.Title>
            <Card.Text className="text-center">₹0</Card.Text>
            <Button variant="info" size="lg" block>
              Add to Cart
            </Button>
          </Card.Body>
        </Card>
        <Card>
          <Card.Img
            variant="top"
            src="https://source.unsplash.com/400x300/?books,books"
          />
          <Card.Body>
            <Card.Title className="text-center">Book 10</Card.Title>
            <Card.Text className="text-center">₹0</Card.Text>
            <Button variant="info" size="lg" block>
              Add to Cart
            </Button>
          </Card.Body>
        </Card>
        <Card>
          <Card.Img
            variant="top"
            src="https://source.unsplash.com/400x300/?pen,books"
          />
          <Card.Body>
            <Card.Title className="text-center">Book 11</Card.Title>
            <Card.Text className="text-center">₹0</Card.Text>
            <Button variant="info" size="lg" block>
              Add to Cart
            </Button>
          </Card.Body>
        </Card>
        <Card>
          <Card.Img
            variant="top"
            src="https://source.unsplash.com/400x300/?desk,books"
          />
          <Card.Body>
            <Card.Title className="text-center">Book 12</Card.Title>
            <Card.Text className="text-center">₹0</Card.Text>
            <Button variant="info" size="lg" block>
              Add to Cart
            </Button>
          </Card.Body>
        </Card>
      </CardDeck>
    </Container> 
    <Footer/>
    </>
  );
}
