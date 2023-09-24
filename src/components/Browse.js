import useNowPlayingMovies from "../hooks/useNowPlayingMovies";
import Header from "./Header";
import MainContainer from "./MainContainer";
import SecondaryContainer from "./SecondaryContainer";

const Browse = () => {
  useNowPlayingMovies();

  return (
    <div>
      {/**
       *
       *  Main Container
       *    video container
       *    video tilte
       *
       *  Secondary Container
       *    -Movie List * n
       *    - Cards * n
       *
       */}

      <Header />
      <div>
      <MainContainer />
      <SecondaryContainer />
      </div>
    </div>
  );
};

export default Browse;
