import React from 'react'
import { useSelector } from 'react-redux'
import { getAllMovies, getAllSeries } from '../features/movieSlice'
import MovieCard from './MovieCard'
import Slider from 'react-slick'
import { sliderSettings } from '../styles/sliderSettings'

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
                    <Slider {...sliderSettings}>
                        {
                            movies?.Search.map(movie => {
                                return (
                                    <div key={movie.imdbID}>
                                        <MovieCard data={movie} />
                                    </div>
                                )
                            })
                        }
                    </Slider>
                </div>
            </div>
            <div className='series-list'>
                <div className='movie-container'>
                    <Slider {...sliderSettings}>
                        {
                            series?.Search.map(series => {
                                return (
                                    <div key={series.imdbID}>
                                        <MovieCard data={series} />
                                    </div>
                                )
                            })
                        }
                    </Slider>
                </div>
            </div>
        </section>
    )
}

export default MovieListing
