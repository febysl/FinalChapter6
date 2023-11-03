import { toast } from "react-toastify";
import { reduxLoginUser } from "../../utils/auth/login_user";
import { CookieKeys, CookieStorage } from "../../utils/cookies";
import { setIsLoggedIn, setToken } from "../reducers/auth/authLoginSlice";

export const LoginUser = (input) => (dispatch) => {
  reduxLoginUser(input)
    .then((result) => {
      CookieStorage.set(CookieKeys.AuthToken, result.data.data.token); 
      dispatch(setToken(CookieStorage.get(CookieKeys.AuthToken)))
      dispatch(setIsLoggedIn(true)); 
      toast.success("Login Success");
      window.location.href = "/home"; 
      // return true;
      // result && 
      // console.log(result, "result")
    })
    .catch((err) => {
    //   return toast.error(err.response.data.message); //handle error
      // console.log(err, "err")
    });
};

// export const LogOut = (input) => (dispatch) => {
//   CookieStorage.remove(CookieKeys.AuthToken); // menghapus token dari cookie
//   dispatch(setToken(undefined)); // menghapus token dari state redux
//   dispatch(setIsLoggedIn(false));
//   toast.success("Log Out Berhasil!");
//   window.location.href = "/"; //ketika token terhapus maka user akan navigasi kehalaman login
// };
