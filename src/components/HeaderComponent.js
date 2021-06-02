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
import { NavLink } from "react-router-dom";

class Header extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isModalOpen: false,
    };
    this.toggleAccount = this.toggleAccount.bind(this);
    this.toggleLogin = this.toggleLogin.bind(this);
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
                  to="#"
                >
                  Login
                </NavLink>
              </NavItem>
              <NavItem>
                <NavLink className="nav-link logged-out" to="#">
                  Sign up
                </NavLink>
              </NavItem>
            </Nav>
          </div>
        </Navbar>

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
                  id="login-password"
                  placeholder="password"
                  required
                />
              </FormGroup>
              <br />
              <Button  color="danger" size="md">
                Login
              </Button>
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
