import React, { Component } from "react";
import {
  Collapse,
  Jumbotron,
  Nav,
  NavItem,
  Navbar,
  NavbarBrand,
  NavbarToggler,
} from "reactstrap";
import { NavLink } from "react-router-dom";

class Header extends Component {
  render() {
    return ( 
      <React.Fragment>
        <Jumbotron fluid>
          <div className="container">
          <div className="row">
            <div className="col">
              <h1>Spartan Calisthenics</h1>
              <h2>A better way to train.</h2>
            </div>
          </div>
          </div>
        </Jumbotron>
        <Navbar dark sticky="top" expand="md">
          <div className="container">
            <NavbarBrand className="mr-auto" href="/">
            </NavbarBrand>
          </div>
        </Navbar>
      </React.Fragment>
    )
  }
}
export default Header;