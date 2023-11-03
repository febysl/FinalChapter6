import { useMutation } from "@tanstack/react-query";
import { useNavigate } from "react-router-dom";
import { API_ENDPOINT } from "../api-endpoint";
import http from "../http";
import { CookieKeys, CookieStorage } from "../cookies";
import { toast } from "react-toastify";


export const reduxLoginUser = async (input)=>{
  return await  http.post(API_ENDPOINT.LOGIN_MOVIE , input )
}

// const LoginUser = async (input) => {
//   try {
//     const result = await http.post(API_ENDPOINT.LOGIN_MOVIE, input);
//     CookieStorage.set(CookieKeys.AuthToken, result.data.data.token);
//     return result && toast.success("Login Success");
//   } catch (error) {
//     return toast.error(error.response.data.message);
//   }
// };

// const useLoginUser = () => {
//   const navigate = useNavigate();

//   return useMutation(LoginUser, {
//     onSuccess: () => {
//       navigate("/");
//     },
//   });
// };

// export { LoginUser, useLoginUser };
