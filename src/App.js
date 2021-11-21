import React from 'react';
//import logo from './logo.svg';
import './App.css';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { NavigationBar } from './NavigationBar/NavigationBar';
import { Home } from './Home';
import About from './About';
import MyComponent from "./MyComponent/MyComponent";
import Details from './Details/Details';

function App() {
  return (
    // <div className="App">
    //   <header className="App-header">
    //     <img src={logo} className="App-logo" alt="logo" />
    //     <p>
    //       Edit <code>src/App.js</code> and save to reload.
    //     </p>
    //     <a
    //       className="App-link"
    //       href="https://reactjs.org"
    //       target="_blank"
    //       rel="noopener noreferrer"
    //     >
    //       Learn React
    //     </a>
    //   </header>
    // </div>
    <React.Fragment>
  <Router>
    <NavigationBar />
    <Switch>
  <Route exact path="/" component={Home} />
  <Route exact path="/Pokedex" component={MyComponent} />
  <Route path="/about" component={About} />
  <Route path="/details/:userId?" component={Details} />
</Switch>
  </Router>
</React.Fragment>
  );
}

export default App;
