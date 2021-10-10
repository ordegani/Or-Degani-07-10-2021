import React, { useEffect, useState } from "react";
import "./App.css";
import axios from "axios";

export default function Home({ favourites, setFavourites }) {
    const [query, setquery] = useState("Tel%20Aviv")

  const apikey = "Uc9kVWewJlSYXyFkbmILsnpmWj16RD8p";
  useEffect(() => {
    const getResults = async () => {
      const response = await axios.get(
        `http://dataservice.accuweather.com/locations/v1/cities/search?apikey=${apikey}&q=${query}`
        
      );
      console.log(response.data.results);
    };
    getResults();
  }, [query]);

  const addToFavourites = (e) => {
    let isExists = false;

    favourites.find((item) => {
      if (item.title == e.title) {
        isExists = true;
        console.log("can't be saved");
      }
    });

    if (!isExists) {
      setFavourites((favourite) => [...favourite, e]);
      console.log(e);
    }
  };
  return <div></div>;
}
