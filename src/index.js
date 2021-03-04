import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter as Router } from "react-router-dom";
import { ChakraProvider, CSSReset, ColorModeScript } from "@chakra-ui/react";
import { ContextProvider } from "./context/fav-context";
import App from "./components/app";
import theme from "./theme/theme";

ReactDOM.render(
  <React.StrictMode>
    <ContextProvider>
      <Router>
        <ChakraProvider theme={theme}>
          <CSSReset />
          <ColorModeScript initialColorMode={theme.config.initialColorMode} />
          <App />
        </ChakraProvider>
      </Router>
    </ContextProvider>
  </React.StrictMode>,
  document.getElementById("root")
);
