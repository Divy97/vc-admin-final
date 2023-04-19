import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import { DarkModeContextProvider } from "./context/darkModeContext";
import { UserProvider } from "./context/userContext";


ReactDOM.render(
  <React.StrictMode>
    <UserProvider>
      <DarkModeContextProvider>
        <App />
      </DarkModeContextProvider>
    </UserProvider>
  </React.StrictMode>,
  document.getElementById("root")
);
