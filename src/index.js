import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter as Router } from "react-router-dom";
import { ChakraProvider, CSSReset } from "@chakra-ui/react";
import { ContextProvider } from "./context/fav-context";
import App from "./components/app";

ReactDOM.render(
  <React.StrictMode>
    <ContextProvider>
      <Router>
        <ChakraProvider>
          <CSSReset />
          <App />
        </ChakraProvider>
      </Router>
    </ContextProvider>
  </React.StrictMode>,
  document.getElementById("root")
);
