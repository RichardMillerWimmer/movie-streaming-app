import React, { useState, useEffect } from 'react'
import movieApi from '../api/movieApi';
import { useParams } from 'react-router-dom'

const MovieDetails = () => {
    const [details, setDetails] = useState({});
    const { id } = useParams();
    console.log(typeof id)

    const fetchDetails = async (id) => {
        await movieApi.get(`?apiKey=${process.env.REACT_APP_API_KEY}&i=${id}&plot=full`)
            .then((res) => {
                console.log(res.data);
                setDetails(res.data)
            })
            .catch(err => console.log(err))
    }

    useEffect(() => {
        fetchDetails()
    }, [id])

    return (
        <div>
            MovieDetails
        </div>
    )
}

export default MovieDetails
