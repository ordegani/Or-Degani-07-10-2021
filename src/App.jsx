import { BrowserRouter, Switch, Route } from "react-router-dom";
import React, { useState } from "react";
import "./App.css";
import Home from "./Home";
import Saved from "./Saved";
import Navbar from "./Navbar";

function App() {
  const [save, setsave] = useState([]);  
  return (
    <div className="App">
      <BrowserRouter>
        <Navbar />
        <Switch>
        <Route path="/home" exact>
          <Home save={save} setsave={setsave} />
        </Route>
          <Route path="/saved" exact>
          <Saved save={save} setsave={setsave} />
        </Route>
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
