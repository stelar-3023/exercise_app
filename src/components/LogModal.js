import React, { Component } from "react";
import { Modal, ModalBody, Table } from "reactstrap";

class LogModal extends Component {
  constructor(props) {
    super(props);
    this.state = {
      exercise: "",
      reps: [],
      isLogWorkoutOpen: false,
    };
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
            <Table>
              <thead>
                <tr>
                  <th>Exercise</th>
                  <th>Reps</th>
                </tr>
              </thead>
            </Table>
          </ModalBody>
        </Modal>
      </React.Fragment>
    );
  }
}

export default LogModal;
