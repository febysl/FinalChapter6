import { reduxSearch } from "../../services/get-search-movie"
import { setSearch } from "../reducers/search/searchSlice"

const searchMovie = ( query) => (dispatch) => { 
   return reduxSearch(query).then((result) => { 
        dispatch(setSearch(result.data.data)) 
        console.log(result)
        return result.data.data
    }).catch((err)=> {
        
    }) 
}
export default searchMovie;