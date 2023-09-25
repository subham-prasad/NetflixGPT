import React from "react";
import GptSearchBar from "./GptSearchBar";
import GptMovieSuggestions from "./GptMovieSuggestions";
import { Bg_Img } from "../utils/constants";

const GptSearch = () => {

  return (
    <div className="">
        <img
        className="fixed -z-10 "
        src={Bg_Img} alt="Backgorund"
      />
        <GptSearchBar/>
        <GptMovieSuggestions/>
    </div>
  );
};

export default GptSearch;
