import React from "react";
import { useNavigate } from "react-router-dom";

export const Brand = () => {
  const navigate = useNavigate();

  return (
    <>
      <div>
        <h1
          onClick={() => navigate("/")}
          className="font-['Roboto'] text-4xl font-black text-[#eb0612] hover:cursor-pointer"
        >
          MOVIELIST
        </h1>
      </div>
    </>
  );
};
