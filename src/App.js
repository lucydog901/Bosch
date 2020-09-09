import React, { Component } from 'react';
import './App.css';
import Header from './components/Header';
import Welcome from './components/Welcome';
import Slider from './components/Slider'
import Preview from './components/Preview';
import Apigrid from './components/Apigrid';
// import { BrowserRouter as Router, Switch, Route } 'react-router-dom';


class App extends Component {
 


  render() {

    return (
      <div>
        <Header />
        <Slider />
        <Preview />
        <Apigrid />
        <Welcome />
        
        
      </div>
    )
  }
}
export default App;