import React, { useState } from "react";
import { Form, Button } from "react-bootstrap";
import "./css/footer.css";

export default function Footer() {
  const [email, setEmail] = useState("");
  const valid = () => {
    if (!email) {
      alert("Field is empty");
      return false;
    }
    return true;
  };
  const Join = (e) => {
    e.preventDefault();
    let v = valid();
    if (v) {
      fetch("/newsletter", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(email),
      }).then((reponse) => {
        if (reponse.ok) alert("You are added to our email list");
        else console.log("Error in email list");
      });
      setEmail("");
      console.log("Added successfully to email list");
    } else console.log("Can not add to email list");
  };
  return (
    <>
      <footer className="container-fluid py-5 foot text-white bg-dark">
        <div className="row">
          <div className="col-12 col-md">
            <h6 className="">BackYard Sale</h6>
            <small className="d-block mb-3 text-secondary">
              © 2020 by BackYardSale.com
            </small>
          </div>
          <div className="col-6 col-md">
            <h5 className="" id="contact_us">
              Contact Us
            </h5>
            <ul className="list-unstyled text-small">
              <li>
                <a className="text-muted" href="mailto:query@backyardsale.com">
                  query@backyardsale.com
                </a>
              </li>
              <li className="text-muted">011-12345678</li>
              <li className="text-muted">New Delhi, India</li>
            </ul>
          </div>
          <div className="col-6 col-md">
            <h5 className="text-center">About Us</h5>
            <p className="text-muted text-center">
              We have taken up this opportunity to help the people in need or
              students who want to read/study but do not want to invest in
              buying new books. This is the place where you can buy second hand
              books at resonable price.
            </p>
          </div>
          <div className="col-6 col-md">
            <Form className="mx-3">
              <h5 className="">Join our newsletter</h5>
              <Form.Group
                className="mb-3"
                controlId="exampleForm.ControlInput1"
              >
                <Form.Label className="h6">Email</Form.Label>
                <Form.Control
                  className="my-2"
                  type="email"
                  value={email}
                  onChange={(e) => {
                    setEmail(e.target.value);
                  }}
                  placeholder="name@example.com"
                />
                <Button variant="dark" onClick={Join} size="sm" block>
                  Join
                </Button>
              </Form.Group>
            </Form>
          </div>
        </div>
      </footer>
    </>
  );
}
