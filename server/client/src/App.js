import React, { Component } from 'react';
import './App.css';
import Date from './components/Date';
import Map from './components/Map';
import News from './components/News';
import Quote from './components/Quote';
import Weather from './components/Weather';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Date />
        <Map />
        <News />
        <Quote />
        <Weather />
      </div>
    );
  }
}

export default App;
