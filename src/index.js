import React from 'react';
import ReactDom from "react-dom";
// import  Product  from "./Product";
// import  ShoppingCart  from "./components/ShoppingCart";
import App from './components/App';
import "../node_modules/bootstrap/dist/css/bootstrap.css";
import "../node_modules/@fortawesome/fontawesome-free/css/all.css";

import  { BrowserRouter } from 'react-router-dom';

ReactDom.render(<BrowserRouter> <App/></BrowserRouter>  ,document.querySelector("#root"));