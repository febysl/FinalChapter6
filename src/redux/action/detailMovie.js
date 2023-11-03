import { reduxDetail } from "../../services/get-details"
import { setDetail } from "../reducers/movie/authMovieSlice"

export const detailMovie = ( id ) => (dispatch) => { 
    reduxDetail(id).then((result) => { // Memanggil fungsi reduxDataMovie untuk mengambil data film dari get-movie
        dispatch(setDetail(result.data.data)) // menyimpan dataMovie di redux
        console.log(result)
    }).catch((err)=> {
        
    }) 
}