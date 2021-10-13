import { BrowserRouter, Switch, Route } from "react-router-dom";
import React, { useState } from "react";
import "./App.css";
import Home from "./Home";
import Favourites from "./Favourites";
import Navbar from "./Navbar";

function App() {
  const [favourites, setfavourites] = useState([]);
  return (
    <div className="App">
      <BrowserRouter>
        <Navbar />
        <Switch>
          <Route path="/search" exact>
            <Home favourites={favourites} setfavourites={setfavourites} />
          </Route>
          <Route path="/favourites" exact>
            <Favourites favourites={favourites} setfavourites={setfavourites} />
          </Route>
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
