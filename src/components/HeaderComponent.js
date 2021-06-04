import React, { Component } from "react";
import { Jumbotron, Nav, NavItem, Navbar } from "reactstrap";
import { NavLink } from "react-router-dom";
import Account from "./AccountDetailsComponent";
import Login from "./LoginComponent";
import Signup from "./SignupComponent";

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
            <Nav
              navbar
              style={{
                marginRight: "auto",
              }}
            >
              <NavItem>
                <Account
                  renderAccount={(toggleAccount) => (
                    <NavLink
                      onClick={toggleAccount}
                      className="nav-link logged-in"
                      data-target="modal-account"
                      to="#"
                    >
                      Account
                    </NavLink>
                  )}
                />
              </NavItem>
              <NavItem>
                <NavLink className="nav-link logged-in" to="#">
                  Log Workout
                </NavLink>
              </NavItem>
              <NavItem>
                <NavLink className="nav-link logged-in" to="#">
                  Logout
                </NavLink>
              </NavItem>
              <NavItem>
                <Login
                  renderLogin={(toggleLogin) => (
                    <NavLink
                      onClick={toggleLogin}
                      className="nav-link logged-out"
                      data-target="modal-login"
                      to="#"
                    >
                      Login
                    </NavLink>
                  )}
                />
              </NavItem>
              <NavItem>
                <Signup
                  renderSignup={(toggleSignup) => (
                    <NavLink
                      onClick={toggleSignup}
                      className="nav-link logged-out"
                      data-target="modal-signup"
                      to="#"
                    >
                      Sign up
                    </NavLink>
                  )}
                />
              </NavItem>
            </Nav>
          </div>
        </Navbar>
      </React.Fragment>
    );
  }
}
export default Header;
