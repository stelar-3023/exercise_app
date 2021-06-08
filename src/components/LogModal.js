import React, { Component } from "react";
import { Button, Form, FormGroup, Modal, ModalBody } from "reactstrap";
import firebase from "../config/fire";

class LogModal extends Component {
  constructor(props) {
    super(props);
    this.state = {
      workouts: [],
      isLogOpen: false,
    };
    this.exerciseRef = firebase.firestore().collection("workouts").doc("Hw1CF8bbizlDSH7VTcvF");
    // bind methods
    this.toggleLog = this.toggleLog.bind(this);
    this.handleChange = this.handleChange.bind(this);
  }

  toggleLog = () => {
    this.setState({
      isLogOpen: !this.state.isLogOpen,
    });
  };

  handleChange(event) {
    this.setState({ [event.target.name]: event.target.value });
  }

 

  getWorkouts() {
    this.exerciseRef.onSnapshot((snapshot) => {
      console.log(snapshot);
      let workouts = snapshot.data().exercises
      console.log(workouts);
      this.setState({ workouts });
    });
  }

  // modifyWorkout(modifiedWorkout) {
  //   this.exerciseRef
  //   .doc(.id)
  // }

  deleteWorkout(workout) {
    this.exerciseRef
      .set({exercises: this.state.workouts.filter((_workout) => {
        return _workout.id !== workout.id
      })})
      .then(this.getWorkouts)
      .catch((error) => {
        console.log(error);
      });
  }

  componentDidMount() {
    this.getWorkouts();
  }

  render() {
    return (
      <React.Fragment>
        {this.props.renderLog(this.toggleLog)}
        <Modal
          id="modal-log"
          className="modal"
          isOpen={this.state.isLogOpen}
          centered={true}
          toggle={this.toggleLog}
        >
          <ModalBody>
            <h2>Workout</h2>
            <Form>
              <FormGroup>
                {this.state.workouts.map((workout) => (
                  <div key={workout.id}>
                    <p>{workout.exercise}</p>
                    <p>{workout.reps}</p>
                    <br />
                    <Button typeo="submit" color="danger" size="sm">
                      Modify
                    </Button>
                    <span>&nbsp;&nbsp;</span>
                    <Button
                      onClick={() => this.deleteWorkout(workout)}
                      typeo="submit"
                      color="danger"
                      size="sm"
                    >
                      Delete
                    </Button>
                  </div>
                ))}
              </FormGroup>
            </Form>
          </ModalBody>
        </Modal>
      </React.Fragment>
    );
  }
}

export default LogModal;
