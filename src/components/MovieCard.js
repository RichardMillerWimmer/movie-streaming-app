import React from 'react'
import { Link } from 'react-router-dom';

import '../styles/MovieCard.scss'

const MovieCard = (props) => {
    const { data } = props;
    // console.log(props.data)

    return (
        <div className='card-item'>
            <Link to={`movie/${data.imdbID}`} >
                <div className='card-inner'>
                    <div className='card-top'>
                        <img src={data.Poster} alt='movie poster' />
                    </div>
                    <div className='card-info'>
                        <div className='card-bottom'>
                            <h4>{data.Title}</h4>
                            <p>{data.Year}</p>
                        </div>
                    </div>
                </div>
            </Link>
        </div>
    )
}

export default MovieCard
