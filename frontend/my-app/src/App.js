import React, { Component } from 'react';
import { BrowserRouter as Router } from 'react-router-dom'
import Content from './components/content';
import Navbar from './components/navbar';
import Footer from './components/footer';


class App extends Component {

  render(){
  return (
    <>
      <Router>
        <Navbar />
        <Content />
        <Footer />
      </Router>
    </>
  );
  }
}

export default App;
