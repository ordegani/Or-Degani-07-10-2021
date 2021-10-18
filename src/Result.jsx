import React from "react";
import "./App.css";

export default function Result({
    Longitude, 
     Latitude,
     LocalizedName,
  onClick,
  text,
}) {
  return (
    <div className="locationContainer">
<h2>{LocalizedName}</h2>
<h2>{Longitude}</h2>
<h2>{Longitude}</h2>
     
      <button
        className="saved"
        onClick={() => onClick({ Longitude,  Latitude, LocalizedName})}
        type="Submit"
      >
        {text}
      </button>


    </div>
  );
}
