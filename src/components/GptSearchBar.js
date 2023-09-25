import React, { useRef } from "react";
import { lang } from "../utils/LanguageConstants";
import { useDispatch, useSelector } from "react-redux";
import openai from "../utils/openai";
import { API_OPTIONS } from "../utils/constants";
import { addGptMovieResult } from "../utils/gptSlice";

const GptSearchBar = () => {
  const searchText = useRef(null);
  const dispatch = useDispatch();
  const langKey = useSelector((store) => store.config.lang);

  const searchMoviesTMDB = async (movie) => {
    const data = await fetch(
      'https://api.themoviedb.org/3/search/movie?query='+movie+'&include_adult=false&language=en-US&page=1',
      API_OPTIONS
    );

    const json = await data.json();
    // console.log(json);

    return json.results;
  };

  const handleGptSearchClick = async () => {
    // console.log(searchText.current.value)

    const gptQuery =
      "Act as a movie recommendation system and suggest some movies for the query " +
      searchText.current.value +
      " only give me names of 5 movies with the comma seperated like the example result given ahead. Example: Movie1, Movie2, Movie3, Movie4, Movie5";

    const gptResults = await openai.chat.completions.create({
      messages: [{ role: "user", content: gptQuery }],
      model: "gpt-3.5-turbo",
    });

    // console.log(gptResults.choices?.[0]?.message?.content);

    const gptMovies = gptResults.choices?.[0]?.message?.content.split(",");

    // console.log(gptMovies)

    const PromiseArray = gptMovies.map((movie) => searchMoviesTMDB(movie));

    const tmdbResults = await Promise.all(PromiseArray);

    console.log(tmdbResults)

    dispatch(addGptMovieResult({movieName: gptMovies, movieResults: tmdbResults}))
  };


  return (
    <div className=" flex justify-center pt-[20%]">
      <form
        className="w-1/2 m-4 bg-black grid grid-cols-12"
        onSubmit={(e) => e.preventDefault()}
      >
        <input
          className="m-4 p-4 col-span-10"
          type="text"
          placeholder={lang[langKey].gptSearchContainer}
          ref={searchText}
        />
        <button
          onClick={handleGptSearchClick}
          className="bg-red-500 text-white rounded-lg col-span-2 p-4 m-4"
        >
          {lang[langKey].search}
        </button>
      </form>
    </div>
  );
};

export default GptSearchBar;
