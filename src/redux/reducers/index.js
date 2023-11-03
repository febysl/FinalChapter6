import { combineReducers } from "redux";
import authLoginSlice from "./auth/authLoginSlice";
import authMovieSlice from "./movie/authMovieSlice";
import searchSlice from "./search/searchSlice";
import userSlice from "./user/userSlice";

// combinereducer tempat untuk setup yang didalamnya berisi reducer yang akan kita gunakan
export default combineReducers({
  auth: authLoginSlice,
  movie: authMovieSlice,
  search: searchSlice,
  user: userSlice
});