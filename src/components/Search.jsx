import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

export const Search = () => {
  const [result, setResult] = useState();

  const navigate = useNavigate();

  const goToSearchResults = (e) => {
    e.preventDefault();
    navigate(`/details/search/${result}`);
    setResult();
  };

  return (
    <>
      <div className="relative w-6/12">
        <form action="" onSubmit={goToSearchResults}>
          <input
            type="text"
            placeholder="What do you want to watch ?"
            className="h-10 w-full rounded-full border-2 border-red-500 bg-transparent text-white focus:ring focus:ring-red-400 focus:outline-none pl-6"
            onChange={(e) => setResult(e.target.value)}
          />
          <div className="absolute inset-y-0 right-0 mr-3 flex items-center">
            <button onSubmit={goToSearchResults}>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="white"
                className="h-5 w-5"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607z"
                />
              </svg>
            </button>
          </div>
        </form>
      </div>
    </>
  );
};
