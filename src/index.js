import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import { BrowserRouter } from "react-router-dom";
<<<<<<< HEAD

ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter>
      <App />
=======
// import { Provider as ReduxProvider } from "react-redux";
// import { store } from "./Redux/store";
ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter>
      {/* <ReduxProvider store={store}> */}
      <App />
      {/* </ReduxProvider> */}
>>>>>>> 3cb2cd80ed211942c80cd5d96fe322bb6e89822c
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById("root")
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
