import React, { useEffect } from 'react';

import MovieListing from './MovieListing';

import movieApi from '../api/movieApi';

const Home = () => {
    const movieQuery = 'Harry';

    useEffect(() => {
        const fetchMovies = async () => {
            const res = await movieApi.get(`?apiKey=${process.env.REACT_APP_API_KEY}&s=${movieQuery}&type=movie`)
                .catch(err => console.log(err))
            console.log(res.data)
        }
        fetchMovies();
    }, [])

    return (
        <section className='home'>
            <div className='banner-img'></div>
            <MovieListing />
        </section>
    )
}

export default Home
