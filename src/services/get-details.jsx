import { API_ENDPOINT } from "../utils/api-endpoint"
import http from "../utils/http"

export const reduxDetail = async (id)=>{
    return await  http.get(API_ENDPOINT.MOVIE_DETAILS(id))
}