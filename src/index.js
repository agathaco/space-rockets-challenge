import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter as Router } from "react-router-dom";
import { ThemeProvider, CSSReset } from "@chakra-ui/core";
import { ContextProvider } from "./context/fav-context";
import App from "./components/app";

ReactDOM.render(
  <React.StrictMode>
    <ContextProvider>
      <Router>
        <ThemeProvider>
          <CSSReset />
          <App />
        </ThemeProvider>
      </Router>
    </ContextProvider>
  </React.StrictMode>,
  document.getElementById("root")
);
