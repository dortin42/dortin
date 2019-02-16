import React, { Component } from 'react';

// Styles
import 'bootstrap/dist/css/bootstrap.css';
import './App.css';

// Bootstrap

// My components
import Knowledge from './components/Knowledge';
import Container from 'react-bootstrap/Container';
import MainSlider from './components/MainSlider';

class App extends Component {
  render() {
    return (
      <>
        <MainSlider/>
        <Container>
          <Knowledge/>
        </Container>
      </>
    );
  }
}

export default App;
