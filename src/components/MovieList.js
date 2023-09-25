import React from "react";
import MovieCards from "./MovieCards";
import { Link } from "react-router-dom";

const MovieList = ({ title, movies }) => {
  // console.log(movies);

  return (
    <div>
      <h1 className="text-3xl p-3">{title}</h1>
      <div className="flex p-6 overflow-x-scroll ">
        <div className="flex ">
          {movies &&
            movies.map((movie) => {
              return (
                <Link to = {"/browse/"+movie.id} key={movie.id}>
                <MovieCards posterPath={movie.poster_path}  />
                </Link>
              );
            })}
        </div>
      </div>
    </div>
  );
};

export default MovieList;
