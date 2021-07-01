import React from "react";
import { Nav, Navbar } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import Main from "./Components/Main";
import Footer from "./Components/Footer";
import Review from "./Components/Review";
import ContactForm from "./Components/ContactForm";
import Shop from "./Components/Shop";
import AboutUs from "./Components/AboutUs";

export default function App1() {
  return (
    <>
      <BrowserRouter>
        <h1 className="display-4 mt-3" id="home">
          BackYard Sale
        </h1>
        <Navbar bg="transparent" expand="lg">
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav>
              <Nav.Link className="mx-2" href="/">
                Home
              </Nav.Link>
              <Nav.Link className="mx-2" href="/shop">
                Shop
              </Nav.Link>
              <Nav.Link className="mx-2" href="/aboutus">
                About us
              </Nav.Link>
              <Nav.Link className="mx-2" href="/contactform">
                Contact us
              </Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Navbar>

        <Switch>
          <Route exact path="/" component={App1} />
          <Route exact path="/aboutus" component={AboutUs} />
          <Route exact path="/shop" component={Shop} />
          <Route exact path="/contactform" component={ContactForm} />
        </Switch>
      </BrowserRouter>
      This is home page
    </>
  );
}
