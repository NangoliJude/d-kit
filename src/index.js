import React from "react";
import { render } from "react-snapshot";
import { BrowserRouter } from "react-router-dom";
import App from "./App";
import { ErrorBoundry } from "./ErrorBoundry";

render(
  <BrowserRouter>
    <ErrorBoundry>
      <App />
    </ErrorBoundry>
  </BrowserRouter>,
  document.getElementById("root")
);
