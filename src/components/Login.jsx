import React, { useState } from "react";
import FormInput from "./Form/FormInput";
import { Link, useNavigate } from "react-router-dom";
import { useGoogleLogin } from "@react-oauth/google";
import axios from "axios";
import { toast } from "react-toastify";
import { CookieKeys, CookieStorage } from "../utils/cookies";
import { useDispatch } from "react-redux";
import { LoginUser } from "../redux/action/authLogin";
import { setToken } from "../redux/reducers/auth/authLoginSlice";

export const Login = () => {
  const dispatch = useDispatch();
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });

  const [errors, setErrors] = useState({});

  // const { mutate: loginUser } = useLoginUser();

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleLoginUser =  () => {
     dispatch(
      LoginUser(formData)
    );
  };
  

  const background =
    "https://assets.nflxext.com/ffe/siteui/vlv3/ab180a27-b661-44d7-a6d9-940cb32f2f4a/89b3a194-7a5a-4509-95ed-9326d4687134/ID-en-20231009-popsignuptwoweeks-perspective_alpha_website_small.jpg";

  const registerLoginWithGoogleAction = async (accessToken) => {
    try {
      let data = JSON.stringify({
        access_token: accessToken,
      });

      let config = {
        method: "post",
        maxBodyLength: Infinity,
        url: `${process.env.REACT_APP_BASEURL}/api/v1/auth/google`,
        headers: {
          "Content-Type": "application/json",
        },
        data: data,
      };

      const response = await axios.request(config);
      const { token } = response.data.data;

      CookieStorage.set(CookieKeys.AuthToken, token);
      window.location.href = "/home";

      dispatch(setToken(token))

    } catch (error) {
      if (axios.isAxiosError(error)) {
        toast.error(error.response.data.message);
        return;
      }
      toast.error(error.message);
    }
  };

  const loginWithGoogle = useGoogleLogin({
    onSuccess: (codeResponse) =>
      registerLoginWithGoogleAction(codeResponse.access_token),
  });

  return (
    <div
      className="w-full relative bg-center bg-cover bg-no-repeat h-screen"
      style={{ backgroundImage: `url(${background})` }}
    >
      <div className="absolute top-0 left-0 w-full h-full bg-opacity-60 bg-black"></div>
      <div className="absolute bottom-0 left-0 w-full h-16 bg-gradient-to-t from-black to-transparent"></div>
      <div className="w-full h-screen flex justify-center absolute items-center px-4">
        <div className="w-full md:w-5/12 p-8 rounded-2xl relative bg-black bg-opacity-70">
          <h1 className="text-3xl text-gray-200 font-semibold">
            Welcome back!
          </h1>
          <p className="font-semibold leading-5 text-sm mt-2 text-gray-200">
            Log in and let's explore everything about the world of cinema!
          </p>
          <div className="flex flex-col gap-2 w-full mt-4">
            <FormInput
              label="Email"
              type="email"
              placeholder="Enter your email"
              name="email"
              value={formData.email}
              onChange={handleInputChange}
              error={errors.email}
            />
            <FormInput
              label="Password"
              type="password"
              placeholder="Enter your password"
              name="password"
              value={formData.password}
              onChange={handleInputChange}
              error={errors.password}
            />
            <button
              onClick={() => handleLoginUser()}
              className="py-2 px-4 mt-2 font-semibold bg-[#eb0612] rounded-md text-white w-full hover:scale-y-105"
            >
              Log in
            </button>

            <div className="flex gap-2 justify-between items-center w-full my-2">
              <span className="w-full bg-gray-500 h-[1px]"></span>
              <span className="font-medium text-gray-200">Or</span>
              <span className="w-full bg-gray-500 h-[1px]"></span>
            </div>
            <button
              onClick={() => loginWithGoogle()}
              className="py-2 px-4 font-semibold bg-gray-200 rounded-md text-black w-full flex gap-2 items-center justify-center hover:scale-y-105"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="16"
                height="16"
                viewBox="0 0 34 34"
                fill="none"
              >
                <path
                  fill-rule="evenodd"
                  clip-rule="evenodd"
                  d="M33.32 17.3864C33.32 16.181 33.2118 15.0219 33.0109 13.9091H17V20.4851H26.1491C25.755 22.6101 24.5573 24.4105 22.7568 25.616V29.8814H28.2509C31.4654 26.9219 33.32 22.5637 33.32 17.3864Z"
                  fill="#4285F4"
                />
                <path
                  fill-rule="evenodd"
                  clip-rule="evenodd"
                  d="M17 34.0001C21.59 34.0001 25.4382 32.4778 28.2509 29.8814L22.7568 25.616C21.2345 26.636 19.2873 27.2387 17 27.2387C12.5722 27.2387 8.82451 24.2482 7.48769 20.23H1.80814V24.6346C4.60541 30.1905 10.3545 34.0001 17 34.0001Z"
                  fill="#34A853"
                />
                <path
                  fill-rule="evenodd"
                  clip-rule="evenodd"
                  d="M7.48768 20.2301C7.14768 19.2101 6.9545 18.1206 6.9545 17.0001C6.9545 15.8796 7.14768 14.7901 7.48768 13.7701V9.36554H1.80812C0.656758 11.6605 -6.10352e-05 14.2569 -6.10352e-05 17.0001C-6.10352e-05 19.7433 0.656758 22.3397 1.80812 24.6347L7.48768 20.2301Z"
                  fill="#FBBC05"
                />
                <path
                  fill-rule="evenodd"
                  clip-rule="evenodd"
                  d="M17 6.76144C19.4959 6.76144 21.7368 7.61916 23.4986 9.30371L28.3745 4.4278C25.4304 1.68461 21.5823 6.10352e-05 17 6.10352e-05C10.3545 6.10352e-05 4.60541 3.80961 1.80814 9.36553L7.48769 13.7701C8.82451 9.75189 12.5722 6.76144 17 6.76144Z"
                  fill="#EA4335"
                />
              </svg>
              <span className="text-gray-800">Sign in with Google</span>
            </button>
          </div>
          <div className="flex justify-center items-center w-full mt-3">
            <p className="text-center text-gray-200 font-medium">
              Don't have an account?
              <span className="font-semibold underline text-[#eb0612] cursor-pointer ">
                <Link to={"/register"}> Register</Link>
              </span>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};
