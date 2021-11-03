import React, { useState } from 'react'

import '../styles/Search.scss'

const Search = () => {
    const [term, setTerm] = useState('')

    const submitHandler = (e) => {
        e.preventDefault()
        console.log(term)
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
