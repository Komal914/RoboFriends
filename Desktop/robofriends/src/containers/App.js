import React, { useState, useEffect } from "react";
import CardList from "../components /CardList";
import SearchBox from "../components /SearchBox";
import Scroll from "../components /Scroll.js";
import ErrorBoundry from "../components /ErrorBoundry";
import "./App.css";

function App() {
  //REACT HOOKS: STATE: useState returns to use the state
  const [robots, setRobots] = useState([]);
  const [searchBox, setSearchBox] = useState("");

  // constructor() {
  //   super();
  //   //state can affect our app's description from parent to child (App -> components )
  //   this.state = {
  //     robots: [],
  //     SearchBox: "",
  //   };
  // }

  //REACT HOOKS: EFFECT
  //effect helps with lifecycle functions like component did mount
  //ran everytime app is rendered
  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then((response) => {
        return response.json();
      })
      .then((users) => {
        setRobots(users); //we change the state of robots,
        //so the use effects func will re-render the app the reflect the changes
        // creates a loop
        //set state -> render -> set state -< render
      });
  }, []); //we only use effect when value changes (second param) to avoid looping of re-renders
  // we give an empty array cuz the value will not change

  //mounting functions, part of the react functions
  //not am arrow function
  // componentDidMount() {
  //   fetch("https://jsonplaceholder.typicode.com/users")
  //     .then((response) => {
  //       return response.json();
  //     })
  //     .then((users) => {
  //       this.setState({ robots: users });
  //     });
  // }

  const onSearchChange = (event) => {
    //using state function to set state
    setSearchBox(event.target.value);
  };

  const filteredRobots = robots.filter((robot) => {
    return robot.name.toLowerCase().includes(searchBox.toLowerCase());
  });

  return !robots.length ? (
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

export default App;
