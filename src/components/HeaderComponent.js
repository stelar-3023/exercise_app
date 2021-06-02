import React, { Component } from "react";
import {
  Collapse,
  Jumbotron,
  Modal,
  ModalBody,
  Nav,
  NavItem,
  Navbar,
  NavbarBrand,
  NavbarToggler,
} from "reactstrap";
import { NavLink } from "react-router-dom";

class Header extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isModalOpen: false,
    };
    this.toggleModal = this.toggleModal.bind(this);
  }

  toggleModal = () => {
    this.setState({
      isModalOpen: !this.state.isModalOpen,
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
                  onClick={this.toggleModal}
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
                <NavLink className="nav-link lopgged-in" to="#">
                  Logout
                </NavLink>
              </NavItem>
              <NavItem>
                <NavLink className="nav-link logged-out" to="#">
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
        <Modal isOpen={this.state.isModalOpen} centered={true}  toggle={this.toggleModal} >
        <ModalBody>Test</ModalBody>
        </Modal>
      </React.Fragment>
    );
  }
}
export default Header;
