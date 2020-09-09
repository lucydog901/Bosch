import React, { Component } from 'react';
import './App.css';
import Header from './components/Header';
import Welcome from './components/Welcome';
import Slider from './components/Slider'
import Preview from './components/Preview';
import Apigrid from './components/Apigrid';


class App extends Component {
  state = {
    paintings: []
  }


  render() {

    return (
      <div>
        <Header />
        <Slider />
        <Apigrid />
        <Welcome />
        <Preview />
        
        
      </div>
    )
  }
}
export default App;