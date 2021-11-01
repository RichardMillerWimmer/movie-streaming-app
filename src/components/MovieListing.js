import React from 'react'
import { useSelector } from 'react-redux'
import { getAllMovies, getAllSeries } from '../features/movieSlice'
import MovieCard from './MovieCard'

import '../styles/MovieListing.scss'

const MovieListing = () => {
    const movies = useSelector(getAllMovies);
    const series = useSelector(getAllSeries);

    // console.log(movies?.Search)

    return (
        <section>
            {
                !movies && <div>Loading...</div>
            }
            <div className='movie-list'>
                <h2>Movies</h2>
                <div className='movie-container'>
                    {
                        movies?.Search.map(movie => {
                            return <MovieCard key={movie.title} data={movie} />
                        })
                    }
                </div>
            </div>
            <div className='series-list'>
                <div className='movie-container'>
                    {
                        series?.Search.map(movie => {
                            return <MovieCard key={movie.title} data={movie} />
                        })
                    }
                </div>
            </div>
        </section>
    )
}

export default MovieListing
