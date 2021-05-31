import React, { Component } from "react";
import { BrowserRouter } from "react-router-dom";
import { Button } from "reactstrap";

class Main extends Component {
  render() {
    return (
      <BrowserRouter>
        <div>Let's workout!</div>
        <div>
          <Button color="primary">Primary</Button>
        </div>
      </BrowserRouter>
    );
  }
}
export default Main;
