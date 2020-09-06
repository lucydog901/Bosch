import React, { Component } from 'react';
import './App.css';
import Header from './components/Header';
import Welcome from './components/Welcome';
import Apigrid from './components/Apigrid';



class App extends Component {
  
  render() {

    return (
      <div>
        <Header />
        <Welcome />
        <Apigrid />
      </div>
    );
  }
}
export default App;