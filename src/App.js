import React from "react";
import { connect } from "react-redux";
import { userInput } from "./redux/actions";
import logo from "./logo.svg";
import "./App.css";

function App({ user, ...props }) {
  console.log(user, props);

  return (
    <div className="App">
      <h1>Form</h1>
      <form>
        <label htmlFor="username">Username:</label>
        <input
          id="username"
          name="username"
          onInput={event => props.userInput(event.target.value, event.target.name)}
          value={user.username}
        ></input>
        <label htmlFor="password">Password </label>
        <input
          id="password"
          name="password"
          type="password"
          onInput={event => props.userInput(event.target.value, event.target.name)}
          value={user.password}
        ></input>
        <button>Submit</button>
      </form>
    </div>
  );
}

const mapStateToProps = state => {
  return state;
};

export default connect(
  mapStateToProps,
  { userInput }
)(App);

