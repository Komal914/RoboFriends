import React, { Component } from "react";
import CardList from "../components /CardList";
import SearchBox from "../components /SearchBox";
import Scroll from "../components /Scroll.js";
import "./App.css";

class App extends Component {
  constructor() {
    super();
    //state can affect our app's description from parent to child (App -> components )
    this.state = {
      robots: [],
      SearchBox: "",
    };
  }

  //mounting functions, part of the react functions
  //not am arrow function
  componentDidMount() {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then((response) => {
        return response.json();
      })
      .then((users) => {
        this.setState({ robots: users });
      });
  }

  onSearchChange = (event) => {
    this.setState({ SearchBox: event.target.value });
  };

  render() {
    const filteredRobots = this.state.robots.filter((robot) => {
      return robot.name
        .toLowerCase()
        .includes(this.state.SearchBox.toLowerCase());
    });

    if (this.state.robots.length === 0) {
      return <h1>Loading...</h1>;
    } else {
      return (
        <div className="tc">
          <h1 className="f1">Robot Friends</h1>
          <SearchBox searchChange={this.onSearchChange} />
          <Scroll>
            <CardList robots={filteredRobots} />
          </Scroll>
        </div>
      );
    }
  }
}

export default App;
