import React, { Component } from 'react';
import { BrowserRouter as Router } from 'react-router-dom'
import Content from './components/content';
import Navbar from './components/navbar';
import Footer from './components/footer';
import axios from 'axios';


class App extends Component {
  constructor(props) {
    super(props) 
    this.state={
      name: undefined,
      cooling: undefined,
      boost: undefined,
      memory: undefined,
      price: undefined
    }
  }

  

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
