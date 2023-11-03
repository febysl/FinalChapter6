import { API_ENDPOINT } from "../utils/api-endpoint";
import http from "../utils/http";

export const reduxDataMovie = async () => {
  return await http.get(API_ENDPOINT.ALL_MOVIE)
}
const fetchMovie = async (authToken, page) => {
  try {
    const config = {
      headers: {
        Authorization: `Bearer ${authToken}`,
      },
      params: {
        page,
      },
    };
    const { data } = await http.get(`${API_ENDPOINT.ALL_MOVIE}`, config);
    return data;
  } catch (error) {
    throw error;
  }
};

export { fetchMovie };
