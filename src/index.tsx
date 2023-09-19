import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import "./styles.css";
import { ThemeProvider } from "@material-tailwind/react";
import {RecoilRoot} from "recoil";

ReactDOM.render(
  <RecoilRoot>
  <React.StrictMode>
    <ThemeProvider>
      <App />
    </ThemeProvider>
  </React.StrictMode>
  </RecoilRoot>,
  document.getElementById("root")
);
