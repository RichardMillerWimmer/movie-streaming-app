import React, { useState, useEffect } from 'react'
import movieApi from '../api/movieApi';
import { useParams } from 'react-router-dom'

import '../styles/MovieDetails.scss'

const MovieDetails = () => {
    const [details, setDetails] = useState({});
    const params = useParams();

    const fetchDetails = async (id) => {
        await movieApi.get(`?apiKey=${process.env.REACT_APP_API_KEY}&i=${params.id}&plot=full`)
            .then((res) => {
                console.log(res.data);
                setDetails(res.data)
            })
            .catch(err => console.log(err))
    }

    useEffect(() => {
        fetchDetails()
    }, [params.id])

    return (
        <section className='movie-section'>
            <div className='section-left'>
                <h2 className='movie-title'>{details.Title}</h2>
                <div className='movie-rating'>
                    <span>IMDB Rating: {details.imdbRating}</span>
                    <span>IMDB Votes: {details.imdbVotes}</span>
                    <span>Runtime: {details.Runtime}</span>
                    <span>Year: {details.Released}</span>
                </div>
                <div className='movie-plot'>{details.Plot}</div>
                <div className='movie-info'>
                    <div>
                        <span>Director:</span>
                        <p>{details.Director}</p>
                    </div>
                    <div>
                        <span>Stars:</span>
                        <p>{details.Actors}</p>
                    </div>
                    <div>
                        <span>Genres:</span>
                        <p>{details.Genre}</p>
                    </div>
                    <div>
                        <span>Languages:</span>
                        <p>{details.Language}</p>
                    </div>
                    <div>
                        <span>Awards:</span>
                        <p>{details.Awards}</p>
                    </div>
                </div>
            </div>
            <div className='section-right'>
                <img src={details.Poster} alt={details.Title} />
            </div>

        </section>
    )
}

export default MovieDetails
