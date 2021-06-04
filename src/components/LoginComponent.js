import React, { Component } from "react";
import {
  Button,
  Form,
  FormGroup,
  Label,
  Input,
  Modal,
  ModalBody,

} from "reactstrap";


class Login extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isLoginOpen: false,
    };
    this.toggleLogin = this.toggleLogin.bind(this);
  }

  toggleLogin = () => {
    this.setState({
      isLoginOpen: !this.state.isLoginOpen,
    });
  };

  render() {
    return (
      <React.Fragment>
      {this.props.renderLogin(this.toggleLogin)}
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
      </React.Fragment>
    );
  }
}

export default Login;