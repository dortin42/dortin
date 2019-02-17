import React, { Component } from 'react';

// Styles
import 'bootstrap/dist/css/bootstrap.css';
import './App.css';

// Bootstrap
import Container from 'react-bootstrap/Container';

// My components
import Header from './components/Header';
import MainSlider from './components/MainSlider';
import Knowledge from './components/Knowledge';
import FeaturedList from './components/FeaturedList';
import Footer from './components/Footer';

class App extends Component {
  render() {
    return (
      <>
        <Header/>
        <MainSlider/>
        <Container>
          <Knowledge/>
          <FeaturedList/>
        </Container>
        <Footer/>
      </>
    );
  }
}

export default App;
