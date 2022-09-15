import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import { PageStore } from "./contexts/Page";

ReactDOM.render(
  <React.StrictMode>
    <PageStore>
      <App />
    </PageStore>
  </React.StrictMode>,
  document.getElementById("root")
);

reportWebVitals();
