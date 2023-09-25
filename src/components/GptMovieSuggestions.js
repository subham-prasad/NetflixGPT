import React from "react";
import { useSelector } from "react-redux";
import MovieList from "./MovieList";

const GptMovieSuggestions = () => {
  const gptMovies = useSelector((store) => store.Gpt);

  const { movieName, movieResults } = gptMovies;

  if (!movieName) return null;
  return (
    <div className="bg-black bg-opacity-80 text-white p-4 m-4">
      <div>
      {movieName.map((movie, index) => (
        <MovieList key={movie} title={movie} movies={movieResults[index]} />
      ))}
      </div>
    </div>
  );
};

export default GptMovieSuggestions;
