import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { API_OPTIONS } from "../utils/constants";
import { addMovieDetails } from "../utils/movieSlice";


const useMovieDetails = (movieId) => {
    const dispatch = useDispatch();

    useEffect(() => {
        getMovieDetails();
      }, []);
    
      const getMovieDetails = async () => {
        const data = await fetch(
          "https://api.themoviedb.org/3/movie/" + movieId + "?language=en-US",
          API_OPTIONS
        );
        const json = await data.json();
        console.log(json);
        dispatch(addMovieDetails(json));
      };
}

export default useMovieDetails