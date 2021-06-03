import React, { Component } from "react";
import {
  Button,
  Form,
  FormGroup,
  Label,
  Input,
  Jumbotron,
  Modal,
  ModalBody,
  Nav,
  NavItem,
  Navbar,
} from "reactstrap";
import { BrowserRouter, NavLink } from "react-router-dom";
import Signup from "./SignupComponent";

class Header extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isAccountOpen: false,
      isLoginOpen: false,
      // isSignupOpen: false,
    };
    this.toggleAccount = this.toggleAccount.bind(this);
    this.toggleLogin = this.toggleLogin.bind(this);
    // this.toggleSignup = this.toggleSignup.bind(this);
  }

  toggleAccount = () => {
    this.setState({
      isAccountOpen: !this.state.isAccountOpen,
    });
  };

  toggleLogin = () => {
    this.setState({
      isLoginOpen: !this.state.isLoginOpen,
    });
  };

  // toggleSignup = () => {
  //   this.setState({
  //     isSignupOpen: !this.state.isSignupOpen,
  //   });
  // };

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
                <NavLink
                  onClick={this.toggleLogin}
                  className="nav-link logged-out"
                  data-target="modal-login"
                  to="#"
                >
                  Login
                </NavLink>
              </NavItem>
              <NavItem>
                <Signup
                  renderTrigger={(toggleSignup) => (
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

        {/* SignupModal */}
        {/* <Modal
          id="modal-signup"
          class="modal"
          isOpen={this.state.isSignupOpen}
          centered={true}
          toggle={this.toggleSignup}
        >
          <ModalBody className="modal-content">
            <h4>Sign up</h4>
            <br />
            <Form id="signup-form">
              <FormGroup className="input-field">
                <Label for="signup-email">Email address</Label>
                <Input
                  type="email"
                  name="email"
                  autoComplete="on"
                  id="signup-email"
                  placeholder="email"
                  required
                />
              </FormGroup>
              <FormGroup className="input-field">
                <Label for="signup-password">Choose password</Label>
                <Input
                  type="password"
                  name="password"
                  autoComplete="on"
                  id="signup-password"
                  placeholder="password"
                  required
                />
              </FormGroup>
              <FormGroup className="input-field">
                <Label for="signup-username">Choose username</Label>
                <Input
                  type="username"
                  name="username"
                  autoComplete="on"
                  id="signup-username"
                  placeholder="username"
                  required
                />
                <br />
                <Button color="danger" size="sm">
                  Submit
                </Button>
              </FormGroup>
            </Form>
          </ModalBody>
        </Modal> */}

        {/* Login Modal  */}
        <Modal
          id="modal-login"
          className="modal"
          isOpen={this.state.isLoginOpen}
          centered={true}
          toggle={this.toggleLogin}
        >
          <ModalBody className="modal-content">
            <h4>Login</h4>
            <br />
            <Form id="login-form">
              <FormGroup className="input-field">
                <Label for="login-email">Email Address</Label>
                <Input
                  type="email"
                  name="email"
                  autoComplete="on"
                  id="login-email"
                  placeholder="email"
                  required
                />
              </FormGroup>
              <FormGroup className="input-field">
                <Label for="login-password">Your password</Label>
                <Input
                  type="password"
                  name="password"
                  autoComplete="on"
                  id="login-password"
                  placeholder="password"
                  required
                />
                <br />
                <Button color="danger" size="sm">
                  Login
                </Button>
              </FormGroup>
            </Form>
          </ModalBody>
        </Modal>

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
