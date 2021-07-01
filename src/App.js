import "./App.css";
import Header from "./Components/Header";
import AboutUs from "./Components/AboutUs";
import Shop from "./Components/Shop";
import ContactForm from "./Components/ContactForm";
import {
  BrowserRouter as Router,
  Route,
  Switch,
  NavLink,
} from "react-router-dom";
import {Nav,Navbar} from 'react-bootstrap';
function App() {
  return (
    <Router>
      <h1 className="display-4 mt-3" id="home">
        BackYard Sale
      </h1>

      <Navbar bg="transparent" expand="lg">
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="mr-auto">
          <div className="mx-5 my-2 ">
      <NavLink className="mx-3 my-2 link" style={{textDecoration:"none"}} to="/">Home</NavLink>
      <NavLink className="mx-3 my-2 link" style={{textDecoration:"none"}} to="/aboutus">About Us</NavLink>
      <NavLink className="mx-3 my-2 link" style={{textDecoration:"none"}} to="/shop">Shop</NavLink>
      <NavLink className="mx-3 my-2 link" style={{textDecoration:"none"}} to="/contactform">Contact Us</NavLink>
      </div>
          </Nav>
        </Navbar.Collapse>
      </Navbar>

      <Switch>
        <Route exact path="/" component={Header} />
        <Route exact path="/aboutus" component={AboutUs} />
        <Route exact path="/shop" component={Shop} />
        <Route exact path="/contactform" component={ContactForm} />
      </Switch>
    </Router>
  );
}

export default App;
