/* App.jsx */
/* Author: Nguyen-Hanh Nong */
/* Purpose: This is the main component of the website. It contains the navigation bar and the routes to the other components. */

/* Importing the necessary libraries and files for the application */
import React, { Component } from "react";
import NavBar from "./NavBar";
import Dashboard from "./Dashboard";
import Login from "./Login";
import ShoppingCart from "./ShoppingCart";
import CustomersList from "./CustomersList";
import { Route, Routes } from "react-router";
import { BrowserRouter } from "react-router-dom";
import NoMatchPage from "./NoMatchPage";

/* Exporing the App component */
export default class App extends Component {
  /* Rendering the component */
  render() {
    /* Returning the routes which are nested with the navigation bar */
    return (
      <BrowserRouter>
      <NavBar/>
      <div className="container-fluid">
      <Routes>
        <Route path="/"  exact element={<Login />} />
        <Route path="/dashboard"  exact element={<Dashboard />} />
        <Route path="/customers" exact element={<CustomersList/>}/>
        <Route path="/cart" exact element={<ShoppingCart/>}/>
        <Route path="*" element={<NoMatchPage/>}/>
      </Routes>
      </div>
    </BrowserRouter>
    );
  }
}
