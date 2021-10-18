import React, { useEffect, useState } from "react";
import "./App.css";
import Result from "./Result";

const Home = ({ save, setsave }) => {
  const [location, setlocation] = useState([]);
  const [search, setSearch] = useState("");
  const [query, setQuery] = useState(search);

  const updateSearch = (e) => {
    setSearch(e.target.value);
  };
  const getSearch = (e) => {
    e.preventDefault();
    setQuery(search);
    setSearch("");
  };

  const getlocation = async () => {
    const key = "HsM5wCAE5BmVAArfV1D2vayYvGpbZx77";
    const response = await fetch(
      `http://dataservice.accuweather.com/locations/v1/cities/search?apikey=${key}&q=${query}`
    );
    const data = await response.json();

    setlocation(data);
  };

  useEffect(() => {
    getlocation();
  }, [query]);

  const addToSaved = (m) => {
    let isExists = false;

    save.find((item) => {
      if (item.GeoPosition === m.GeoPosition) {
        isExists = true;
        console.log("double");
      }
    });

    if (!isExists) {
      setsave((save) => [...save, m]);
      console.log(m);
    }
  };

  return (
    <div className="Scontainer">
      <form onSubmit={getSearch} className="search-form">
        <input
          className="search-field"
          placeholder="Gotham"
          type="text"
          value={search}
          onChange={updateSearch}
        />
        <button className="search-button" type="Submit">
          SEARCH
        </button>
      </form>
      <div className="SlocationContainer">
        <Result
          LocalizedName={location[2].LocalizedName}
          Latitude={location[4].GeoPosition.Latitude}
          Longitude={location[4].GeoPosition.Longitude}
          onClick={addToSaved}
          text="Save"
        />
      </div>
    </div>
  );
};

export default Home;
