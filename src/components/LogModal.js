import React, { Component } from "react";
import { Button, Input, Modal, ModalBody, Table } from "reactstrap";
import firebase from "../config/fire";

class LogModal extends Component {
  constructor(props) {
    super(props);
    this.state = {
      workouts: [],
      isLogOpen: false,
      isUpdating: false,
      draftWorkout: null,
    };
    this.exerciseRef = firebase
      .firestore()
      .collection("workouts")
      .doc("XCz4SLHEKva8dlgmyAMQ");
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
      let workouts = snapshot.data().exercises;
      console.log(workouts);
      this.setState({ workouts });
    });
  }

  updateProperty = (event) => {
    const value = event.target.value;
    const draftWorkout = {
      ...this.state.draftWorkout,
      [event.target.name]: value,
    };
    console.log(event.target.name)
    this.setState({ draftWorkout });
  }

  saveWorkout = (index) => {
    const workouts = [...this.state.workouts]; // create a new array
    workouts[index] = {
      ...this.state.draftWorkout,
    };
    this.setState({
      isUpdating: false,
      draftWorkout: null,
      workouts,
    });
  }

  modifyWorkout = (workout, index) => {
    this.setState({
      isUpdating: true,
      draftWorkout: { ...workout },
      draftIndex: index,
    });
  }

  cancelUpdate = () => {
    this.setState({
      isLogOpen: !this.state.isLogOpen,
    })
  }

  deleteWorkout(workout) {
    this.exerciseRef
      .set({
        exercises: this.state.workouts.filter((_workout) => {
          return _workout.id !== workout.id;
        }),
      })
      .then(this.getWorkouts)
      .catch((error) => {
        console.log(error);
      });
  }

  componentDidMount() {
    this.getWorkouts();
  }

  renderInputs = () => {
    const draftWorkout = this.state.draftWorkout
    return <div><Input
      placeholder={draftWorkout.exercise}
      onChange={this.updateProperty}
      name="exercise"
    ></Input>
      <br />
      <Input
        placeholder={draftWorkout.reps}
        onChange={this.updateProperty}
        name="reps"
      ></Input>
      <br />
      <Button
        onClick={() => {
          this.saveWorkout(this.state.draftIndex)
        }}
        type="submit"
        size="sm"
        className="mb-1 log-button  save-button"
      >
        Save
      </Button></div>
  }

  renderTable = () => {
    return <Table>
      <thead>
        <tr>
          <th>Exercises</th>
          <th>Reps</th>
        </tr>
      </thead>
      <tbody>
        {this.state.workouts.map((workout, index) => (
          <tr key={workout.id}>
            <td>{workout.exercise}</td>
            <td>{workout.reps}</td>
            <td>
              <Button
                onClick={(event) => this.modifyWorkout(workout, index)}
                typeo="submit"
                size="sm"
                className="mb-1 log-button"
              >
                Modify
              </Button>
            </td>
            <td>
              <Button
                onClick={(event) => this.cancelUpdate(workout)}
                typeo="submit"
                size="sm"
                className="mb-1 log-button"
              >
                Cancel
              </Button>
            </td>

            <td>
              <Button
                onClick={() => this.deleteWorkout(workout)}
                typeo="submit"
                size="sm"
                className="mb-1 log-button"
              >
                Delete
              </Button>
            </td>
          </tr>
        ))}
      </tbody>
    </Table>
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
            {this.state.isUpdating ? this.renderInputs() : this.renderTable()}
          </ModalBody>
        </Modal>
      </React.Fragment>
    );
  }
}

export default LogModal;
