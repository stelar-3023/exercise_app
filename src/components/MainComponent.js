import React, { Component } from "react";
import { BrowserRouter } from "react-router-dom";
import Header from "./HeaderComponent";
import exercise from "../img/exercise.jpg";

class Main extends Component {
  render() {
    return (
      <BrowserRouter>
        <Header />
        <img src={ exercise } alt=""/>
      </BrowserRouter>
    );
  }
}
export default Main;
