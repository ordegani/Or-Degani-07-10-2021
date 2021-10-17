import React from "react";
import { Link } from "react-router-dom";

function Navbar({ favourites, setFavourites }) {

  return (
    <div className="navbar">
      <ul className="navbar_Ul">
        <li>
          <Link className="navbar_link" to="/home">
            Home
          </Link>
        </li>
        <li>
          <Link className="navbar_link" to="/saved">
            Saved
          </Link>
        </li>
      </ul>
    </div>
  );
}

export default Navbar;
