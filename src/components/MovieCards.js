import React from "react";
import { IMG_CDN_URL } from "../utils/constants";

const MovieCards = ({ posterPath }) => {
  //   console.log(posterPath);
  if(!posterPath) return null
  return (
   
    <div className="w-40 mx-2">
   
      <img
       alt="Movie_posters" src={IMG_CDN_URL + posterPath} />
      
    </div>
  );
    
};

export default MovieCards;
