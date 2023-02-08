import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import { ChakraProvider, extendTheme } from "@chakra-ui/react";
import {BrowserRouter} from "react-router-dom"


const root = ReactDOM.createRoot(document.getElementById("root"));
const theme = extendTheme({
  fonts: {
    heading: "'Oswald', sans-serif",
    body: "'Oswald', sans-serif",
  },
})
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <ChakraProvider theme={theme}>
        <App />
      </ChakraProvider>
    </BrowserRouter>
  </React.StrictMode>
);


reportWebVitals();
