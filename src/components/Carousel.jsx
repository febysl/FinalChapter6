import React, { useState } from "react";
import { useEffect } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination } from "swiper/modules";
import { fetchMovie } from "../services/get-movie";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/autoplay";
import { CookieKeys, CookieStorage } from "../utils/cookies";
import { Link, useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { dataMovie } from "../redux/action/dataMovie";

export const Carousel = () => {
  const authToken = CookieStorage.get(CookieKeys.AuthToken);
  const [popularMovies, setPopularMovies] = useState([]);
  const navigate = useNavigate();

  const data = useSelector((state)=>state.movie)
  const dispatch = useDispatch()

  const dataAll = () => {
    dispatch(dataMovie())
  }

  const getMovies = async () => {
    try {
      const data = await fetchMovie(authToken);
      setPopularMovies(data.data);
    } catch (error) {
      console.error("Error fetching movies:", error);
    }
  };

  useEffect(() => {
    dataAll()
    if (authToken) {
      getMovies();
    } else {
      navigate("/login");
    }
  }, [authToken]);

  return (
    <div>
      <Swiper
        slidesPerView={1}
        spaceBetween={30}
        loop={true}
        autoplay={{
          delay: 5000,
          disableOnInteraction: false,
        }}
        pagination={{
          clickable: true,
        }}
        modules={[Pagination, Autoplay]}
        className="mySwiper"
      >
        <div>
          {data.dataMovie?.map((movie) => (
            <SwiperSlide key={movie.id}>
              <div className="h-screen w-full">
                <img
                  src={`${process.env.REACT_APP_BASEIMAGE_URL}/${movie.backdrop_path}`}
                  alt=""
                  className="absolute top-0 left-0 w-full bg-cover z-0"
                />
                <div className="absolute top-0 left-0 w-full h-full bg-opacity-60 bg-black z-10"></div>
                <div className="absolute bottom-0 left-0 w-full h-16 bg-gradient-to-t from-black to-transparent"></div>
                <div className="absolute top-40 z-10 mx-10 my-10">
                  <p className="text-white text-7xl py-8">{movie.title}</p>
                  <p className="text-white text-lg w-1/2 py-6">
                    {movie.overview}
                  </p>
                  <Link to={`details/${movie.id}`}>
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
                      Watch Trailer
                    </button>
                  </Link>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </div>
      </Swiper>
    </div>
  );
};
