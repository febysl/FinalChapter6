import { useQuery } from "@tanstack/react-query";
import http from "../http";
import { API_ENDPOINT } from "../api-endpoint";
import { useNavigate } from "react-router-dom";

export const reduxUser = async () => {
  return await http.get(API_ENDPOINT.GET_USER)
}

const fetchUserData = async ({ queryKey }) => {
  const [_key] = queryKey;
  const { data } = await http
    .get(_key)
    .then((value) => {
      return value;
    })
    .catch((err) => {
      const navigate = useNavigate();
      if (err.response.status === 401) {
        navigate("/login");
      }
    });
  return data;
};

const useGetDataUser = (options) => {
  return useQuery([API_ENDPOINT.GET_USER, options], fetchUserData);
};

export { fetchUserData, useGetDataUser };
