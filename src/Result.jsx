import React from "react";


export default function Movie({
    GeoPosition,
    LocalizedName,

  onClick,
  text,
}) {
  return (
    <div className="movieContainer">
      <h4>{LocalizedName}</h4>   
      <h4>{GeoPosition}</h4>  


      <button
        className="saved"
        onClick={() => onClick({ GeoPosition, LocalizedName })}
        type="Submit"
      >
        {text}
      </button>


    </div>
  );
}
