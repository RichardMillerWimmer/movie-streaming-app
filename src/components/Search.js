import React, { useState } from 'react'
import { useDispatch } from 'react-redux'
import { fetchtAsyncMovies, fetchtAsyncSeries } from '../features/movieSlice'

import '../styles/Search.scss'

const Search = () => {
    const [term, setTerm] = useState('')

    const dispatch = useDispatch();

    const submitHandler = (e) => {
        e.preventDefault()
        if (term === '') return alert('Please enter search term')
        dispatch(fetchtAsyncMovies(term));
        dispatch(fetchtAsyncSeries(term));
        setTerm('')

    }

    return (
        <div className='search-bar'>
            <form onSubmit={submitHandler} >
                <input type='text' value={term} placeholder='search movies and shows' onChange={e => setTerm(e.target.value)} />
                <button type='submit' className='fa fa-search'></button>
            </form>
        </div>
    )
}

export default Search
