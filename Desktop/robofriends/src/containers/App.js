import React, { useState, useEffect, Component } from "react";
import { connect } from "react-redux";
import CardList from "../components /CardList";
import SearchBox from "../components /SearchBox";
import Scroll from "../components /Scroll.js";
import ErrorBoundry from "../components /ErrorBoundry";
import { setSearchField, requestRobots } from "../actions";
import "./App.css";
import { render } from "react-dom";

//redux: getting state from redux
const mapStateToProps = (state) => {
  return {
    //calling my reducer to set state
    searchField: state.searchRobots.searchField,
    robots: state.requestRobots.robots,
    isPending: state.requestRobots.isPending,
    error: state.requestRobots.error,
  };
};

//redux: sends dispatch to reducer to trigger the action for state
const mapDispatchToProps = (dispatch) => {
  return {
    onSearchChange: (event) => dispatch(setSearchField(event.target.value)),
    onRequestRobots: () => dispatch(requestRobots()),
  };
};
class App extends Component {
  //REACT HOOKS: STATE: useState returns to use the state
  // const [robots, setRobots] = useState([]);
  // const [searchBox, setSearchBox] = useState("");

  //REACT HOOKS: EFFECT
  //effect helps with lifecycle functions like component did mount
  //ran everytime app is rendered

  // useEffect(() => {
  //   fetch("https://jsonplaceholder.typicode.com/users")
  //     .then((response) => {
  //       return response.json();
  //     })
  //     .then((users) => {
  //       setRobots(users); //we change the state of robots,
  //       //so the use effects func will re-render the app the reflect the changes
  //       // creates a loop
  //       //set state -> render -> set state -< render
  //     });
  // }, []); //we only use effect when value changes (second param) to avoid looping of re-renders
  // we give an empty array cuz the value will not change

  //mounting functions, part of the react functions
  componentDidMount() {
    this.props.onRequestRobots();
  }

  render() {
    const { searchField, onSearchChange, robots, isPending } = this.props;

    const filteredRobots = robots.filter((robot) => {
      return robot.name.toLowerCase().includes(searchField.toLowerCase());
    });
    return isPending ? (
      <h1>Loading...</h1>
    ) : (
      <div className="tc">
        <h1 className="f1">Robot Friends</h1>
        <SearchBox searchChange={onSearchChange} />
        <Scroll>
          <ErrorBoundry>
            <CardList robots={filteredRobots} />
          </ErrorBoundry>
        </Scroll>
      </div>
    );
  }
}

//higher order function connect returns another function which will take in App as param
export default connect(mapStateToProps, mapDispatchToProps)(App); //connecting to redux, passes states as props to APP COMPONENT
