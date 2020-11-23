import React from 'react';
import './App.css';
import ReactDOM from "react-dom";
import {Route,
        BrowserRouter as Router,
        Switch}
        from 'react-router-dom';
import Header from './component/Header';
//import 'bootstrap/dist/bootstrap.min.css';
import Home from './component/Home';
import Projects from './component/Projects';
import Resume from './component/Resume';
import Contact from './component/Contact';

function App() {
  return (
    <Router >

    <div className="App">
      <Header />
      {/*Footer*/}

      <Switch>
        <Route exact path="/">
          <Home />
        </Route>
        <Route path="/projects">
          <Projects />
        </Route>
        <Route path="/resume">
          <Resume />
        </Route>
        <Route path="/contact">
          <Contact />
        </Route>
      </Switch>

    </div>
  </Router>
  );
}

export default App;
