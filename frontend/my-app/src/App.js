import React, { Component } from 'react';
import { BrowserRouter as Router } from 'react-router-dom'
import Content from './components/content';
import Navbar from './components/navbar';

class App extends Component {

  render(){
  return (
    <>
      <Router>
        <Navbar />
        <Content />
      </Router>
    </>
  );
  }
}

export default App;
