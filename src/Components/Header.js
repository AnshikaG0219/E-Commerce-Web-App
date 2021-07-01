import React from "react";
import "./css/header.css";
import Main from './Main';
import Review from './Review';
import Footer from "./Footer";
import "bootstrap/dist/css/bootstrap.min.css";


export default function Header() {
  return (
    <>
    <Main />
    <Review />
    <Footer />
    </>
  );
}
