import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import "./styles.css";
import { ThemeProvider } from "@material-tailwind/react";

ReactDOM.render(
  <React.StrictMode>
    <ThemeProvider>
      <App />
    </ThemeProvider>
  </React.StrictMode>,
  document.getElementById("root")
);
