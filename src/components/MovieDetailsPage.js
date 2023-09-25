
import { useParams } from "react-router-dom";

import { useSelector } from "react-redux";
import {Bg_Img, IMG_CDN_URL } from "../utils/constants";

import useMovieDetails from "../hooks/useMovieDetails";
import useMovieTrailer from "../hooks/useMovieTrailer";
import Header from "./Header"

const MovieDetailsPage = () => {
  const { movieId } = useParams();

  const movieDetails = useSelector((store) => store.movies?.movieDetails);
  const trailerVideo = useSelector((store) => store.movies?.trailerVideo);

  useMovieDetails(movieId);
  useMovieTrailer(movieId);

  if (!movieDetails) return null;

  const { poster_path, original_title, overview, genres, tagline, homepage } =
    movieDetails;
  return (
    <div className="">
      <div className="fixed -z-10 ">
        <img
        className="h-screen object-fill md:w-screen opacity-30"
        src={IMG_CDN_URL + poster_path} alt="Backgorund"
      />
      </div>
      <div className="">
      {trailerVideo && (
        <iframe
          className="w-full aspect-video"
          src={
            "https://www.youtube.com/embed/" +
            trailerVideo.key +
            "?autoplay=1&mute=1&loop=1&playlist="+trailerVideo.key
          }
          title="Youtube Video Player"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
        ></iframe>
      )}
      </div>
      <div className="md:grid md:grid-cols-12 shadow-2xl m-3 p-3">
      <img
        className="w-full aspect-video md:col-span-5"
        src={IMG_CDN_URL + poster_path}
        alt="Poster"
      />
      <div className="mx-4 md:col-span-7">
      <h1 className="text-3xl justify-center">{original_title}</h1>
      <h2>OverView: </h2>
      <p>{overview}</p>
      <h2>Genres:  </h2>
      <p>{ genres.map((genre) => genre?.name) + ", "} </p>
      <h2>Tagline:</h2>
      <p> { tagline}</p>
      <p>Visit Official Site: {homepage} </p>
      
      </div>
    </div>
    </div>
  );
};

export default MovieDetailsPage;
