import { useMutation } from "@tanstack/react-query";
import http from "../http";
import { API_ENDPOINT } from "../api-endpoint";
import { toast } from "react-toastify";

const RegisterUser = async (input) => {
  try {
    const { data } = await http.post(API_ENDPOINT.REGISTER_MOVIE, input);
    return data &&  toast.success("Register Success");
  } catch (error) {
    return toast.error(error.response.data.message);
  }
};

const useCreateUser = () => {
  return useMutation(RegisterUser);
}; 

export { RegisterUser, useCreateUser };
