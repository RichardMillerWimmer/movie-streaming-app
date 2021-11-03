import React, { useEffect } from 'react';

import MovieListing from './MovieListing';

import { fetchtAsyncMovies, fetchtAsyncSeries } from '../features/movieSlice';
import { useDispatch } from 'react-redux';

const Home = () => {
    const dispatch = useDispatch();

    useEffect(() => {
        const initSearchMovies = 'Harry';
        const initSearchSeries = 'Friends';
        dispatch(fetchtAsyncMovies(initSearchMovies));
        dispatch(fetchtAsyncSeries(initSearchSeries));
    }, [dispatch])

    return (
        <section className='home'>
            <div className='banner-img'></div>
            <MovieListing />
        </section>
    )
}

export default Home
