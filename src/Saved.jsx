import { React, useEffect } from "react";
import Result from "./Result"
import axios from "axios";

export default function Saved({ save, setsave }) {
  // useEffect(() => {
  //   const fetch = async () => {
  //     const data = await axios.get("http://localhost:5000/");
  //     console.log(data);
  //   };
  //   fetch();
  // }, []);

  save.forEach((element) => {
    console.log(element);
  });
  const remove = (element) => {
    setsave(save.filter((save) => save.GeoPosition !== element.GeoPosition));
  };

  // useEffect(() => {
  //   const postSave = () => {
  //     axios.post("/api/users/login", save).then((res) => console.log(res));
  //     console.log(save);
  //   };
  //   return () => {
  //     postSave();
  //   };
  // }, [save]);

  return (
    <div className="homeContainer">
      <button
        className={save.length !== 1 ? "hidden" : "reset"}
        //TODO axios.delet
        onClick={() => setsave([])}
      >
        Reset
      </button>
      ♥
      <div className="savedMoviesContainer">
      {save.map((movie) => (
             <Result GeoPosition={save[0].GeoPosition}
             LocalizedName={save[0].LocalizedName}
    

            onClick={remove}
            text="Delete"
          />
          ))}
      </div>
    </div>
  );
}
