import React from 'react'
import MovieCards from './MovieCards'

const MovieList = ({title, movies}) => {
  
    // console.log(movies)


    return ( 
    <div >
        <h1 className='text-3xl p-3'>{title}</h1>
        <div className='flex p-6 overflow-x-scroll '>
        <div className='flex '>
        {movies && movies.map((movie)=>
        <MovieCards posterPath = {movie.poster_path} key={movie.id}/>
        )}
        </div>
        </div>

    </div>
  )
}

export default MovieList