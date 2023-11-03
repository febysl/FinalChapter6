import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { API_ENDPOINT } from "../utils/api-endpoint";
import http from "../utils/http";
import { useDispatch, useSelector } from "react-redux";
import { detailMovie } from "../redux/action/detailMovie";

const baseImg = process.env.REACT_APP_BASEIMAGE_URL;

export const Details = () => {
  const params = useParams();
  const dispatch = useDispatch();
  const detailsMovie = useSelector((state) => state.movie.dataDetail)
  
  
  const url =
    detailsMovie &&
    detailsMovie.videos.find((video) => video.type === "Trailer");

  const trailer = url
    ? detailsMovie && `https://www.youtube.com/watch?v=${url.key}`
    : detailsMovie &&
      `https://www.youtube.com/watch?v=${detailsMovie.videos.results[0].key}`;


  const getDetailMovie =  () => {
    dispatch(detailMovie(params.id))
  };

  useEffect(() => {
    getDetailMovie();
  }, [params.id , dispatch]);

  const date = detailsMovie && detailsMovie.release_date.substring(0, 4);
  const rate = detailsMovie && detailsMovie.vote_average.toFixed(1);
  return (
    <div>
      <div className="w-full h-screen">
        <div
          style={{
            backgroundImage: `url(${baseImg}/${detailsMovie.backdrop_path})`,
          }}
          alt=""
          className="w-full h-full bg-cover z-0"
        ></div>
        <div></div>
      </div>
      <div className="absolute top-0 left-0 w-full h-full bg-opacity-60 bg-black z-10"></div>
      <div className="absolute bottom-0 left-0 w-full h-16 bg-gradient-to-t from-black to-transparent"></div>
      <div className="absolute top-40 z-20 mx-8">
        <p className="text-white text-6xl font-semibold">
          {detailsMovie.original_title}
        </p>
        <p className="text-white text-md py-4 text-2xl font-medium">
          {detailsMovie.genres
            ? detailsMovie.genres.map((genre) => genre.name).join(", ")
            : ""}
        </p>
        <p className="text-white text-lg w-5/12 py-6">
          {detailsMovie.overview}
        </p>
        <p className="text-white text-xl items-center flex gap-2">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="currentColor"
            className="w-6 h-6"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M6.75 3v2.25M17.25 3v2.25M3 18.75V7.5a2.25 2.25 0 012.25-2.25h13.5A2.25 2.25 0 0121 7.5v11.25m-18 0A2.25 2.25 0 005.25 21h13.5A2.25 2.25 0 0021 18.75m-18 0v-7.5A2.25 2.25 0 015.25 9h13.5A2.25 2.25 0 0121 11.25v7.5m-9-6h.008v.008H12v-.008zM12 15h.008v.008H12V15zm0 2.25h.008v.008H12v-.008zM9.75 15h.008v.008H9.75V15zm0 2.25h.008v.008H9.75v-.008zM7.5 15h.008v.008H7.5V15zm0 2.25h.008v.008H7.5v-.008zm6.75-4.5h.008v.008h-.008v-.008zm0 2.25h.008v.008h-.008V15zm0 2.25h.008v.008h-.008v-.008zm2.25-4.5h.008v.008H16.5v-.008zm0 2.25h.008v.008H16.5V15z"
            />
          </svg>
          {date}{" "}
        </p>
        <p className="text-white text-xl w-5/12 py-6 flex flex-row gap-2 items-center">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="yellow"
            className="w-6 h-6"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M11.48 3.499a.562.562 0 011.04 0l2.125 5.111a.563.563 0 00.475.345l5.518.442c.499.04.701.663.321.988l-4.204 3.602a.563.563 0 00-.182.557l1.285 5.385a.562.562 0 01-.84.61l-4.725-2.885a.563.563 0 00-.586 0L6.982 20.54a.562.562 0 01-.84-.61l1.285-5.386a.562.562 0 00-.182-.557l-4.204-3.602a.563.563 0 01.321-.988l5.518-.442a.563.563 0 00.475-.345L11.48 3.5z"
            />
          </svg>
          {rate}/10
        </p>
        <button className="w-40 h-10 rounded-full border-2 border-red-600 bg-red-600 text-white flex justify-center items-center gap-2">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="currentColor"
            className="w-6 h-6"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
            />
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M15.91 11.672a.375.375 0 010 .656l-5.603 3.113a.375.375 0 01-.557-.328V8.887c0-.286.307-.466.557-.327l5.603 3.112z"
            />
          </svg>
          <a href={trailer} target="_blank" rel="noopener noreferrer">
            Watch Trailer
          </a>
        </button>
      </div>
    </div>
  );
};
