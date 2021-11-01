import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import movieApi from '../api/movieApi';

const initialState = {
    movies: {},
    series: {}
}

export const fetchtAsyncMovies = createAsyncThunk('movies/fetchAsyncMovies', async () => {
    const movieQuery = 'Harry';
    const res = await movieApi.get(`?apiKey=${process.env.REACT_APP_API_KEY}&s=${movieQuery}&type=movie`)

    return res.data;
})

export const fetchtAsyncSeries = createAsyncThunk('movies/fetchAsyncSeries', async () => {
    const seriesQuery = 'Harry';
    const res = await movieApi.get(`?apiKey=${process.env.REACT_APP_API_KEY}&s=${seriesQuery}&type=series`)

    return res.data;
})

const movieSlice = createSlice({
    name: 'movie',
    initialState: { value: initialState },
    reducers: {
        addMovies: (state, { payload }) => {
            state.movies = payload
        }
    },
    extraReducers: {
        [fetchtAsyncMovies.pending]: () => {
            console.log('pending')
        },
        [fetchtAsyncMovies.fulfilled]: (state, { payload }) => {
            console.log('fulfilled')
            return { ...state, movies: payload }
        },
        [fetchtAsyncMovies.rejected]: () => {
            console.log('rejected')
        },
        [fetchtAsyncSeries.pending]: () => {
            console.log('pending')
        },
        [fetchtAsyncSeries.fulfilled]: (state, { payload }) => {
            console.log('fulfilled')
            return { ...state, series: payload }
        },
        [fetchtAsyncSeries.rejected]: () => {
            console.log('rejected')
        }
    }
})

export const { addMovies } = movieSlice.actions;
export const getAllMovies = (state) => state.movies.movies;
export const getAllSeries = (state) => state.movies.series;
export default movieSlice.reducer;