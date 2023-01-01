import React from "react";
import ReactDOM from "react-dom/client";
import { Provider } from "react-redux";
import { configureStore } from "@reduxjs/toolkit";

import { searchRobots } from "./reducers";
import "./index.css";
import reportWebVitals from "./reportWebVitals";
import "tachyons";
import App from "./containers/App.js";

const store = configureStore({ reducer: searchRobots });

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<App store={store} />);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
