import { useEffect } from "react";
import "./App.css";
import axios from "axios";
// import Result from "./Result";

export default function Home({ favourites, setFavourites }) {
  const apikey = "Btv69uHeljLaOSw5I2fa6jgcdeGbsdxY";

  const getResults = () => {
    return axios.get(
      `http://dataservice.accuweather.com/locations/v1/cities/search?apikey=${apikey}&q=Tel%20Aviv`
    );
  };

  const addToFavourites = (e) => {
    let isExists = false;

    favourites.find((item) => {
      if (item.LocalizedName == e.LocalizedName) {
        isExists = true;
        console.log("can't be saved");
      }
    });

    if (!isExists) {
      setFavourites((favourite) => [...favourite, e]);
      console.log(e);
    }
  };

  useEffect(async () => {
    const response = await getResults();
    console.log(response.data);
  }, []);

//   return (
//     <div className="Home_container">
//       <Result GeoPosition={Result.data.GeoPosition} />
//     </div>
//   );
}
