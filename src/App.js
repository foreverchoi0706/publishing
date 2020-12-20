import React, { useState } from "react";
import "./App.scss";
import Home from "./components/Home";
import Besthorrorscenes from "./components/Besthorrorscenes";
import Paintbox from "./components/Paintbox";
import Balenciaga from "./components/Balenciaga";

import { BrowserRouter, Route } from "react-router-dom";

function App() {

  return (
    <div className="App">
      <BrowserRouter className="App-BrowserRouter">
        <Route exact={true} path="/publishing" component={Home} />
        <Route
          exact={true}
          path="/publishing/Besthorrorscenes"
          component={Besthorrorscenes}
        />
        <Route exact={true} path="/publishing/Paintbox" component={Paintbox} />
        <Route
          exact={true}
          path="/publishing/Balenciaga"
          component={Balenciaga}
        />
        <Route exact={true} />
      </BrowserRouter>
    </div>
  );
}
export default App;
