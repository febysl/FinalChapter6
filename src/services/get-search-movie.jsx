import { useQuery } from "@tanstack/react-query";
import { API_ENDPOINT } from "../utils/api-endpoint";
import http from "../utils/http";

export const reduxSearch = async (query) => {
  return await http.get(`${API_ENDPOINT.SEARCH_MOVIE}?page=1&query=${query ? query : ""}`)
}

const fetchMovie = async ({ queryKey }) => {
  const [_key, _params] = queryKey;
  const { data } = await http.get(_key, { params: _params });
  return data;
};

const useMovieDataQuery = (options) => {
  return useQuery([API_ENDPOINT.SEARCH_MOVIE, options], fetchMovie);
};

export { fetchMovie, useMovieDataQuery };
