import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import BootstrapExample from './components/BootstrapExample'; //no curly brackets around BoostrapExample because I exported with default
import TestProps from './components/TestProps';

class App extends Component {
  render() {
    return (
      <div className="App">
        <div className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h2>Welcome to React</h2>
        </div>
        <p className="App-intro">
          To get started, edit <code>src/App.js</code> and save to reload.
        </p>

        <h2> These are the ingredients to candy</h2>
        <ul>
          <li>Protons</li>
          <li>Neutrons</li>
          <li>Electrons</li>
        </ul>


        <h2> This is an example of using props</h2>
        <TestProps name={"Trent Reznor"} />
        <TestProps name={"Rob Thomas"} />
        <TestProps name={"John Rzeznik"} />
        <TestProps name={"Cedric Bixler-Zavala"} />
        <TestProps name={"Dave Gahan"} />
        <TestProps name={"Zack de la Rocha"} />
        <TestProps name={"Jesse Rutherford"} />
        <TestProps name={"Robert Smith"} />

        {/* can't do TestProps without the name attribute because of the bottom of the TestProps component

          Warning: Failed prop type: The prop `name` is marked as required in `TestProps`, but its value is `undefined`. in TestProps */}
        {/* <TestProps /> */}

        <h2>This is an example of using Bootstrap - the css cdn is in the public/index.html file</h2>
        {/* this is a comment and this is me rendering a component that I imported */}
        <BootstrapExample />
      </div>
    );
  }
}

export default App;
