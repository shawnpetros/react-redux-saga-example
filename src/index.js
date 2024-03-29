import React from "react";
import ReactDOM from "react-dom";
import { Provider } from "react-redux";
import App from "./components/app";
import configureStore from "./store";
import { readOrSeed } from "./utils";
import "bulma/css/bulma.css";
import "./styles.css";

readOrSeed();

const store = configureStore();

function Main() {
  return (
    <Provider store={store}>
      <App />
    </Provider>
  );
}

const rootElement = document.getElementById("root");
ReactDOM.render(<Main />, rootElement);
