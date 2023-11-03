import React, { useEffect, useState } from "react";
import { Brand } from "../Brand";
import { Button } from "../Button";
import { Search } from "../Search";
import { useNavigate } from "react-router-dom";
import { CookieKeys, CookieStorage } from "../../utils/cookies";
import { toast } from "react-toastify";
import { useDispatch, useSelector } from "react-redux";
import userMovie from "../../redux/action/userMovie";
import { setToken } from "../../redux/reducers/auth/authLoginSlice";
import { ProfilePopup } from "../../pages/ProfilePopup";

export const Navbar = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const dataUser = useSelector((state) => state.user.user);
  const [isProfilePopupOpen, setProfilePopupOpen] = useState(false);

  const handleProfileClick = () => {
    setProfilePopupOpen(true);
  };

  const handleCloseProfilePopup = () => {
    setProfilePopupOpen(false);
  };

  const handleLogout = () => {
    
    CookieStorage.remove(CookieKeys.AuthToken,
      dispatch(setToken(undefined)),
      {
      path: "/",
      expires: new Date(0),
    });
    toast.success("Log Out Berhasil!");
    navigate("/");
  };

  const getUser = () =>{
    dispatch(userMovie())
  }
  useEffect(() => {
    getUser()
  },[]);

  return (
    <div className="flex flex-row gap-3 relative justify-between mx-3 px-3 my-3 z-10">
      <Brand />
      <Search />
      <div className="flex flex-row gap-3 ">
        <Button handleLogout={handleLogout} />
        <button className=" rounded-full p-2 border-2 flex row" onClick={handleProfileClick}>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="currentColor"
            className="w-6 h-6"
            color="white"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M17.982 18.725A7.488 7.488 0 0012 15.75a7.488 7.488 0 00-5.982 2.975m11.963 0a9 9 0 10-11.963 0m11.963 0A8.966 8.966 0 0112 21a8.966 8.966 0 01-5.982-2.275M15 9.75a3 3 0 11-6 0 3 3 0 016 0z"
            />
          </svg>
          <h1 className="text-white pl-2 pr-2 font-semibold">{dataUser.name} </h1>
        </button>
      </div>
      <div>       
      </div>
      {isProfilePopupOpen && (
        <div className="profile-popup-container bg-white rounded">
          <ProfilePopup username={dataUser.name} email={dataUser.email} closePopup={handleCloseProfilePopup} />
        </div>
      )}
    </div>
  );
};
