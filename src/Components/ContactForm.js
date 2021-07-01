import React, { useState } from "react";
import { Form, Button } from "react-bootstrap";
import Footer from "./Footer";
import './css/contactform.css';

export default function ContactForm() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [message, setMessage] = useState("");
  const validate = () => {
    if (!name || !email || !password) {
      alert("Name, Email or Password can not be empty!");
      return false;
    }
    return true;
  };
  const onSubmit = (ev) => {
    ev.preventDefault();
    let valid = validate();
    let values = { name, email, password, message };
    if (valid) {
      fetch("/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(values),
      }).then((response) => {
        if (response.ok) alert("Message sent successfully");
        else console.log("Error in submitting message");
      });
      setName("");
      setEmail("");
      setPassword("");
      setMessage("");
      console.log("Success");
    } else console.log("Error");
  };

  return (
    <>
    <div className="content_form">
      <h4 className="pt-3 text-center text-white" id="home">
        Send a message, we will get back to you ASAP
      </h4>
      <Form className="container my-4 form text-white" onSubmit={onSubmit}>
        <Form.Group controlId="exampleForm.ControlTextarea1">
          <Form.Label>Name</Form.Label>

          <Form.Control
            type="text"
            className="w-50"
            value={name}
            onChange={(ev) => {
              setName(ev.target.value);
            }}
            placeholder="Full Name"
          />
        </Form.Group>
        <Form.Group controlId="exampleForm.ControlInput1">
          <Form.Label>Email address</Form.Label>
          <Form.Control
            type="email"
            className="w-50"
            value={email}
            onChange={(ev) => {
              setEmail(ev.target.value);
            }}
            placeholder="name@example.com"
          />
        </Form.Group>
        <Form.Group controlId="formBasicPassword">
          <Form.Label>Password</Form.Label>
          <Form.Control
            type="password"
            className="w-50"
            value={password}
            onChange={(ev) => {
              setPassword(ev.target.value);
            }}
            placeholder="Password"
          />
        </Form.Group>
        <Form.Group controlId="exampleForm.ControlTextarea1">
          <Form.Label>Message</Form.Label>
          <Form.Control
            as="textarea"
            className="w-50"
            value={message}
            onChange={(ev) => {
              setMessage(ev.target.value);
            }}
            rows={2}
            placeholder="Say Hello!"
          />
        </Form.Group>
        <Button variant="info" onClick={onSubmit}>
          Submit
        </Button>
      </Form>
      <Footer />
      </div>
    </>
  );
}
