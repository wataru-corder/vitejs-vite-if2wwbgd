import { useState } from 'react';
import { BrowserRouter, Link, Switch, Route } from 'react-router-dom';
import './App.css';
import { Home } from './Home';
import { Page1 } from './Page1';
import { Page2 } from './Page2';

function App() {
  return (
    <>
      <BrowserRouter>
        <Link to="/">Home</Link>
        <br />
        <Link to="/page1">page1</Link>
        <br />
        <Link to="/page2">page2</Link>

        <Switch>
          <Route exact path="/">
            <Home />
          </Route>
          <Route path="/page1">
            <Page1 />
          </Route>
          <Route path="/page2">
            <Page2 />
          </Route>
        </Switch>
      </BrowserRouter>
    </>
  );
}

export default App;
