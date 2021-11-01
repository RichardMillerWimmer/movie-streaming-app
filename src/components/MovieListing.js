import React from 'react'
import { useSelector } from 'react-redux'
import { getAllMovies } from '../features/movieSlice'
import MovieCard from './MovieCard'

import '../styles/MovieListing.scss'

const MovieListing = () => {
    const movies = useSelector(getAllMovies);
    // console.log(movies?.Search)

    return (
        <section className='movie-list'>
            {
                !movies && <div>Loading...</div>
            }
            <div className='movie-container'>
                {
                    movies?.Search.map(movie => {
                        return <MovieCard key={movie.title} data={movie} />
                    })
                }
            </div>
        </section>
    )
}

export default MovieListing
