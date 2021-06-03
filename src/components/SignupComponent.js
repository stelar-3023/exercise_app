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

class Signup extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isSignupOpen: false,
    };
    this.toggleSignup = this.toggleSignup.bind(this);
  }

  toggleSignup = () => {
    this.setState({
      isSignupOpen: !this.state.isSignupOpen,
    });
  };

  render() {
    return (
      <React.Fragment>
      {this.props.renderTrigger(this.toggleSignup)}
        <Modal
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
        </Modal>
      </React.Fragment>
    );
  }
}

export default Signup;
