import React, { Component } from "react";
import logo from "./logo.svg";
import "./App.css";
import Content from "./content";

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <p>React play with virtualized extension.</p>
          <span className="App-link">React Play with virtualized</span>
        </header>
        <section>
          <Content />
        </section>
      </div>
    );
  }
}

export default App;
