import { BrowserRouter, Link, Switch, Route } from 'react-router-dom';
import './App.css';

import { Router } from './Router/Router';

function App() {
  return (
    <>
      <BrowserRouter>
        <Link to="/">Home</Link>
        <br />
        <Link to="/page1">page1</Link>
        <br />
        <Link to="/page2">page2</Link>

        <Router/>
      </BrowserRouter>
    </>
  );
}

export default App;
