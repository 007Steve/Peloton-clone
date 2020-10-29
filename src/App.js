import React from 'react';
import './App.css';
import Home from './Home'

import Login from './Login'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
function App() {
  return (
    <Router>
      <div className="App">
        <Route exact path="/login" component={Login}/>
        <Route exact path="/" component={Home}/>
      </div>
    </Router>
  );
}

export default App;
