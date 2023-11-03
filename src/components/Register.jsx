import React, { useState } from "react";
import FormInput from "./Form/FormInput";
import { Link, useNavigate } from "react-router-dom";
import { useCreateUser } from "../utils/auth/register_user";


export const Register = () => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    username: "",
    email: "",
    password: "",
  });

  const [errors, setErrors] = useState({});

  const { mutate: registerUser, isSuccess } = useCreateUser();

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleRegisterUser = () => {
    registerUser({
      email: formData.email,
      name: formData.username,
      password: formData.password,
    });
    if (isSuccess){
      navigate("/login")
    }
  };

  const background =
    "https://assets.nflxext.com/ffe/siteui/vlv3/ab180a27-b661-44d7-a6d9-940cb32f2f4a/89b3a194-7a5a-4509-95ed-9326d4687134/ID-en-20231009-popsignuptwoweeks-perspective_alpha_website_small.jpg";

  return (
    <div
      className="w-full relative bg-center bg-cover bg-no-repeat h-screen"
      style={{ backgroundImage: `url(${background})` }}
    >
      <div className="absolute top-0 left-0 w-full h-full bg-opacity-60 bg-black"></div>
      <div className="absolute bottom-0 left-0 w-full h-16 bg-gradient-to-t from-black to-transparent"></div>
      <div className="w-full h-screen flex justify-center items-center px-4 absolute z-40">
        <div className="w-full md:w-5/12 bg-black bg-opacity-70 p-8 rounded-2xl relative">
          <h1 className="text-3xl text-gray-200 font-semibold">
            Welcome to{" "}
            <span className="text-[#eb0612] font-bold">MovieList</span>
          </h1>
          <p className="font-semibold leading-5 text-sm mt-2 text-gray-200">
            Welcome to our movie database app! We are happy to invite you to
            explore the amazing world of movies.
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
              label="Username"
              type="text"
              placeholder="Enter your username"
              name="username"
              value={formData.username}
              onChange={handleInputChange}
              error={errors.username}
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
              onClick={() => handleRegisterUser()}
              className="py-2 px-4 mt-2 font-semibold bg-[#eb0612] rounded-md text-white w-full hover:scale-y-105"
            >
              Register
            </button>
          </div>
          <div className="flex justify-center items-center w-full mt-3">
            <p className="text-center text-gray-200 font-medium">
              Already have an account?{" "}
              <span className="font-semibold underline text-[#eb0612] cursor-pointer">
                <Link to={"/login"}>Login</Link>
              </span>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};
