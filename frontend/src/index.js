import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import { ChakraProvider, extendTheme } from "@chakra-ui/react";
import {BrowserRouter} from "react-router-dom"
import { Provider } from "react-redux";
import { store } from "./redux/Store";


const root = ReactDOM.createRoot(document.getElementById("root"));
const theme = extendTheme({
  fonts: {
    heading: "'Oswald', sans-serif",
    body: "'Oswald', sans-serif",
  },
})
root.render(
  <Provider store={store}>
    <BrowserRouter>
      <ChakraProvider theme={theme}>
        <App />
      </ChakraProvider>
    </BrowserRouter>
  </Provider>
);


reportWebVitals();
