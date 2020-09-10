import React, { Component } from 'react';
import './App.css';
import Header from './components/Header';
import Welcome from './components/Welcome';
import Slider from './components/Slider'
import Preview from './components/Preview';
import Apigrid from './components/Apigrid';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';


class App extends Component {
 


  render() {

    return (
      <Router>
      <div>
        <Header />
        {/* <Slider /> */}
        <Switch>
        <Route path="/choose" component={Slider} />
        <Route path="/search" component={Apigrid} />
        <Route path="/upload" component={Preview} />
        <Route path="/" exact component={Welcome} />
        </Switch>
        
      </div>
      </Router>

    );

  }
}
export default App;