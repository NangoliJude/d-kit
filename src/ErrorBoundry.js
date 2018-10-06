import React, { Component } from "react";
import { load } from "webfontloader";

class ErrorBoundry extends Component {
  state = {
    hasError: false,
    error: null,
    errorInfo: null
  };
  componentDidMount() {
    load({
      google: {
        families: [
          "Roboto",
          "Open Sans",
          "Ubuntu",
          "Oswald",
          "Quattrocento",
          "Lato",
          "Pacifico"
        ]
      }
    });
  }
  componentDidCatch(error, errorInfo) {
    this.setState({
      hasError: true,
      error,
      errorInfo
    });
  }
  render() {
    if (this.state.hasError) {
      return <p>Oppps! Error occured our engineers are working on it</p>;
    }
    return <div>{this.props.children}</div>;
  }
}
export { ErrorBoundry };
