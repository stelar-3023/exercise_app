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
import fire from "../config/fire";

class WorkoutModal extends Component {
  constructor(props) {
    super(props);
    this.state = {
      exercise: "",
      reps: "",
      isLogWorkoutOpen: false,
    };
    // bind methods
    this.toggleWorkout = this.toggleWorkout.bind(this);
    this.handleChange = this.handleChange.bind(this);
  }

  toggleWorkout = () => {
    this.setState({
      isLogWorkoutOpen: !this.state.isLogWorkoutOpen,
    });
  };

  handleChange(event) {
    this.setState({ [event.target.name]: event.target.value });
  }

  render() {
    return (
      <React.Fragment>
        {this.props.renderWorkout(this.toggleWorkout)}
        <Modal
          id="modal-exercise"
          className="modal"
          isOpen={this.state.isLogWorkoutOpen}
          centered={true}
          toggle={this.toggleWorkout}
        >
          <ModalBody>
            <h4>Add Exercises</h4>
            <br />
            <Form id="exercise-form">
              <FormGroup className="input-field">
                <Label for="exercise">Exercise</Label>
                <Input
                  value={this.state.exercise}
                  onChange={this.handleChange}
                  type="text"
                  name="exercise"
                  autocomplete="off"
                  id="exercise"
                  placeholder="exercise"
                  required
                />
              </FormGroup>
              <FormGroup className="input-field">
                <Label for="repetitions">Reps</Label>
                <Input
                  value={this.state.reps}
                  onChange={this.handleChange}
                  type="number"
                  name="reps"
                  autocomplete="off"
                  id="reps"
                  placeholder="reps"
                  required
                />
                <br />
                <Button
                  type="submit"
                  color="danger"
                  size="sm"
                >
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

export default WorkoutModal;
