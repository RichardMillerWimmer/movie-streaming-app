import React from 'react'

import '../styles/MovieCard.scss'

const MovieCard = (props) => {
    const { data } = props;
    // console.log(props.data)

    return (
        <div className='card-itam'>
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
        </div>
    )
}

export default MovieCard
