import React from 'react';
import './App.scss';
import Home from './Home';
import Besthorrorscenes from './Besthorrorscenes';


import { BrowserRouter, Route, Link } from 'react-router-dom';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Route exact={true} path="/sass_clone/" component={Home} />
        <Route exact={true} path="/sass_clone/Besthorrorscenes" component={Besthorrorscenes} />
        <Route exact={true} />
        <Route exact={true} />
        <Route exact={true} />
      </BrowserRouter>
    </div>
  );
}
export default App;