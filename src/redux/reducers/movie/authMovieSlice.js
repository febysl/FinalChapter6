import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    dataMovie : [], //dataMovie digunakan untuk menyimpan data film.
    dataDetail : ""
}


const authMovieSlice = createSlice({
    name: 'movieData',
    initialState,
    reducers:{
        setDataMovie: (state, action ) => { //ngatur dataMovie action.payload
            state.dataMovie = action.payload;
        },
        setDetail: (state, action ) => {
            state.dataDetail = action.payload;
        }
    }
})

export const {setDataMovie, setDetail} = authMovieSlice.actions;

export default authMovieSlice.reducer;