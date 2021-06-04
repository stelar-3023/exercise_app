import React, { Component } from "react";
import { Jumbotron, Modal, ModalBody, Nav, NavItem, Navbar } from "reactstrap";
import { NavLink } from "react-router-dom";
import Signup from "./SignupComponent";
import Login from "./LoginComponent";

class Header extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isAccountOpen: false,
      isLoginOpen: false,
      // isSignupOpen: false,
    };
    this.toggleAccount = this.toggleAccount.bind(this);
  }

  toggleAccount = () => {
    this.setState({
      isAccountOpen: !this.state.isAccountOpen,
    });
  };

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
                <NavLink
                  onClick={this.toggleAccount}
                  className="nav-link logged-in"
                  data-target="modal-account"
                  to="#"
                >
                  Account
                </NavLink>
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

        {/* Account Modal  */}
        <Modal
          id="modal-account"
          className="modal"
          isOpen={this.state.isAccountOpen}
          centered={true}
          toggle={this.toggleAccount}
        >
          <ModalBody className="modal-content">
            <h4>Account Details</h4>
            <br />
            <div className="account-details"></div>
          </ModalBody>
        </Modal>
      </React.Fragment>
    );
  }
}
export default Header;
