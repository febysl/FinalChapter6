import React from "react";
import { Details } from "../components/Details";
import { Navbar } from "../components/navbar/Navbar";
import { useGetDataUser } from "../utils/auth/get_user";

export const DetailsMovies = () => {
  const { data: getUser } = useGetDataUser();

  return (
    <div>
      <div className="absolute top-0 right-0 bottom-0 left-0 z-20">
        <Navbar />
      </div>
      <Details />
    </div>
  );
};
