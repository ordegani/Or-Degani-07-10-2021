import React from "react";
import { Link } from "react-router-dom";
import "./App.css";

function Navbar({ favourites, setFavourites }) {
  return (
    <div className="navbar">
      <ul className="navbar_Ul">
        <li>
          <Link className="navbar_link" to="/search">
            Search
          </Link>
        </li>
        <li>
          <Link className="navbar_link" to="/favourites">
            Favourites
          </Link>
        </li>
      </ul>
    </div>
  );
}

export default Navbar;
