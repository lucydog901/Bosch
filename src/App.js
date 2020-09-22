import React, { Component } from 'react';
import './App.css';
import Header from './components/Header';
import Welcome from './components/Welcome';
import Preview from './components/Preview';
import Apigrid from './components/Apigrid';
import Choose from './components/Choose';
import Gallery from './components/Gallery';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';


class App extends Component {
 


  render() {

    return (
      <Router>
      <div>
        <Header />
        <Switch>
        <Route path="/choose" component={Choose} />
        <Route path="/search" component={Apigrid} />
        <Route path="/upload" component={Preview} />
        <Route path="/" exact component={Welcome} />
        <Route path="/gallery" component={Gallery} />
        </Switch>
        
      </div>
      </Router>

    );

  }
}
export default App;