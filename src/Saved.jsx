import { React } from "react";
import Result from "./Result";

export default function Saved({ save, setsave }) {
  save.forEach((element) => {
    console.log(element);
  });
  const remove = (element) => {
    setsave(save.filter((save) => save.GeoPosition !== element.GeoPosition));
  };

  return (
    <div className="homeContainer">
      <button
        className={save.length !== 1 ? "hidden" : "reset"}
        onClick={() => setsave([])}
      >
        Reset
      </button>

      <div className="savedMoviesContainer">
        {save.map((save) => (
          <Result
            LocalizedName={save[2].LocalizedName}
            Latitude={save[4].GeoPosition.Latitude}
            Longitude={save[4].GeoPosition.Longitude}
            onClick={remove}
            text="Delete"
          />
        ))}
      </div>
    </div>
  );
}
