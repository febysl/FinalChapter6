export const API_ENDPOINT = {
  REGISTER_MOVIE: "/api/v1/auth/register",
  LOGIN_MOVIE: "/api/v1/auth/login",
  AUTH_GOOGLE: "/api/v1/auth/google",
  ALL_MOVIE: "/api/v1/movie/popular",
  MOVIE_DETAILS: (id) => `/api/v1/movie/${id}&append_to_response=videos`,
  SEARCH_MOVIE: "/api/v1/search/movie",
  GET_USER: "/api/v1/auth/me",
};
