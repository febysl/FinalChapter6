import { reduxDataMovie } from "../../services/get-movie"
import { setDataMovie } from "../reducers/movie/authMovieSlice"

export const dataMovie = ( ) => (dispatch) => { 
    reduxDataMovie().then((result) => { // Memanggil fungsi reduxDataMovie untuk mengambil data film dari get-movie
        dispatch(setDataMovie(result.data.data)) // menyimpan dataMovie di redux
        console.log(result)
    }).catch((err)=> {
        
    }) 
}