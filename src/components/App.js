import React, { Component } from 'react';
import HeaderHero from './HeaderHero';
import SecondComponent from './SecondComponent';


class App extends Component {
  render() {
    return (
      <div className="App">
        <HeaderHero />
        <SecondComponent />
      </div>
    );
  }
}

export default App;
