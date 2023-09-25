import React from "react";
import GptSearchBar from "./GptSearchBar";
import GptMovieSuggestions from "./GptMovieSuggestions";
import { Bg_Img } from "../utils/constants";

const GptSearch = () => {

  return (
    <div>
    <div className="fixed -z-10 ">
        <img
        className="h-screen object-cover md: w-screen"
        src={Bg_Img} alt="Backgorund"
      />
      </div>
      <div className="">
        <GptSearchBar/>
        <GptMovieSuggestions/>
    </div>
    </div>
  );
};

export default GptSearch;
