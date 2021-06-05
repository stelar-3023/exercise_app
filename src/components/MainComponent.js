import React, { Component } from "react";
import fire from "../config/fire";
import { BrowserRouter } from "react-router-dom";
import Login from "./LoginComponent";
import Home from "./HomeComponent";
import exercise from "../img/exercise.jpg";

class Main extends Component {
  constructor(props) {
    super(props);
    this.state = {
      user: {},
    };
  }

  componentDidMount() {
    this.authListener();
  }

  authListener() {
    fire.auth().onAuthStateChanged((user) => {
      if (user) {
        this.setState({ user });
      } else {
        this.setState({ user: null });
      }
    });
  }

  render() {
    return (
      <BrowserRouter>
        {this.state.user ? <Home /> : <Login />}
        <img src={exercise} alt="" />
      </BrowserRouter>
    );
  }
}
export default Main;
