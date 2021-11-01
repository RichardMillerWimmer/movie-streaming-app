import React from 'react'
import { useSelector } from 'react-redux'
import { getAllMovies } from '../features/movieSlice'

const MovieListing = () => {
    const movies = useSelector(getAllMovies);
    console.log(movies)

    return (
        <div>
            MovieListing
        </div>
    )
}

export default MovieListing
