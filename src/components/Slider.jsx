import React, { useEffect, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { FreeMode } from "swiper/modules";
import { fetchMovie } from "../services/get-movie";
import { useNavigate } from "react-router-dom";
import { CookieKeys, CookieStorage } from "../utils/cookies";
import { dataMovie } from "../redux/action/dataMovie";
import { useDispatch, useSelector } from "react-redux";

export const Slider = () => {
  const baseImg = process.env.REACT_APP_BASEIMAGE_URL;
  const authToken = CookieStorage.get(CookieKeys.AuthToken);
  const [sliderMovie, setSliderMovie] = useState([]);
  const navigate = useNavigate();
  const data = useSelector((state)=>state.movie)
  const dispatch = useDispatch()

  const dataAll = () => {
    dispatch(dataMovie())
  }

  const getMovies = async () => {
    try {
      const data = await fetchMovie(authToken);
      setSliderMovie(data.data);
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

  const handleGoToDetails = (movie_id) => {
    navigate(`/details/${movie_id}`);
  };
  return (
    <>
      <div>
        <Swiper
          slidesPerView={4}
          spaceBetween={0}
          freeMode={true}
          pagination={{
            clickable: true,
          }}
          modules={[FreeMode]}
          className="mySwiper"
        >
          {data.dataMovie?.map((movie) => (
            <SwiperSlide key={movie.id}>
              <div className="mx-10 my-10">
                <img
                  src={`${baseImg}/${movie.poster_path}`}
                  alt=""
                  className="rounded-xl hover:cursor-pointer hover:shadow-xl hover:shadow-red-500"
                  onClick={() => handleGoToDetails(movie.id)}
                />
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </>
  );
};
