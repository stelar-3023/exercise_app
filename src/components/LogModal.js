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

  modifyWorkout(workout) {}

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
            <Table>
            <thead>
              <tr>
                <th>Exercises</th>
                <th>Reps</th>
              </tr>
            </thead>
              {this.state.workouts.map((workout, index) => (
                <tr key={workout.id}>
                  <td>{workout.exercise}</td>
                  <td>{workout.reps}</td>
                  {this.state.isUpdating &&
                    this.state.draftWorkout &&
                    this.state.draftWorkout.id === workout.id && (
                      <div>
                        <Input
                          placeholder={workout.exercise}
                          onChange={(event) => {
                            const value = event.target.value;
                            const draftWorkout = {
                              ...this.state.draftWorkout,
                              exercise: value,
                            };
                            this.setState({ draftWorkout });
                          }}
                        ></Input>
                        <br />
                        <Input
                          placeholder={workout.reps}
                          onChange={(event) => {
                            const value = event.target.value;
                            const draftWorkout = {
                              ...this.state.draftWorkout,
                              reps: value,
                            };
                            this.setState({ draftWorkout });
                          }}
                        ></Input>
                        <br />
                      </div>
                    )}
                  {this.state.isUpdating ? (
                    <Button
                      onClick={() => {
                        const workouts = [...this.state.workouts]; // create a new array
                        workouts[index] = {
                          ...this.state.draftWorkout,
                        };
                        this.setState({
                          isUpdating: false,
                          draftWorkout: null,
                          workouts,
                        });
                      }}
                      typeo="submit"
                      color="danger"
                      size="sm"
                      className="mb-1"
                      
                    >
                      Save
                    </Button>
                  ) : (
                    <Button
                      onClick={() => {
                        this.setState({
                          isUpdating: true,
                          draftWorkout: { ...workout },
                        });
                      }}
                      typeo="submit"
                      color="danger"
                      size="sm"
                      className="mb-1"
                    >
                      Modify
                    </Button>
                  )}

                  <span>&nbsp;&nbsp;</span>
                  <Button
                    onClick={() => this.deleteWorkout(workout)}
                    typeo="submit"
                    color="danger"
                    size="sm"
                    className="mb-1"
                  >
                    Delete
                  </Button>
                </tr>
              ))}
            </Table>
          </ModalBody>
        </Modal>
      </React.Fragment>
    );
  }
}

export default LogModal;
