import React, { Component } from "react";
import "./App.css";
import CardList from "./CardList";
import { robots } from "./robots";
import SearchBox from "./SearchBox";

class App extends Component {
  constructor() {
    super();
    //state can affect our app's description from parent to child (App -> components )
    this.state = {
      robots: robots,
      SearchBox: "",
    };
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
    return (
      <div>
        <h1>Robot Friends</h1>
        <SearchBox searchChange={this.onSearchChange} />
        <CardList robots={filteredRobots} />
      </div>
    );
  }
}

export default App;
