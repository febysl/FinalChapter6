import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { FooterComponent } from "../components/Footer";
import { fetchMovie } from "../services/get-movie";
import { CookieKeys, CookieStorage } from "../utils/cookies";
import { Navbar } from "../components/navbar/Navbar";
import { useGetDataUser } from "../utils/auth/get_user";
import { useDispatch, useSelector } from "react-redux";
import { DataMovie, dataMovie } from "../redux/action/dataMovie";

export const AllMovies = () => {
  const authToken = CookieStorage.get(CookieKeys.AuthToken);
  const baseImg = process.env.REACT_APP_BASEIMAGE_URL;
  const [allMovie, setAllMovie] = useState([]);
  const [isFirstPage, setIsFirstPage] = useState(true);
  const [isLastPage, setIsLastPage] = useState(false);
  const navigate = useNavigate();
  const [pageNow, setPageNow] = useState(1);
  const data = useSelector((state)=>state.movie)
  const dispatch = useDispatch()

  const dataAll = () => {
    dispatch(dataMovie())
  }


  const loadNextPage = () => {
    if (!isLastPage) {
      setPageNow(pageNow + 1);
    }
  };
  const loadPreviousPage = () => {
    if (!isFirstPage) {
      setPageNow(pageNow - 1);
    }
  };
  const getMovies = async (page) => {
    try {
      const data = await fetchMovie(authToken, page);
      setAllMovie(data.data);
      setIsFirstPage(page === 1);
    } catch (error) {
      console.error("Error fetching movies:", error);
    }
  };

  const { data: getUser, isSuccess } = useGetDataUser();

  useEffect(() => {
    dataAll()
    if (isSuccess) {
      getMovies(pageNow);
    }
  }, [pageNow]);

  const handleGoToDetails = (movie_id) => {
    navigate(`/details/${movie_id}`);
  };
  return (
    <div className="bg-slate-900">
      <div className="absolute top-0 right-0 left-0">
        <Navbar />
      </div>
      <h1 className="font-black text-4xl px-10 pt-20 pb-5 text-red-500 ">
        All Movies
      </h1>
      <div className="flex flex-row justify-end mx-14">
        <button
          onClick={loadPreviousPage}
          disabled={isFirstPage}
          className="mr-3 flex h-8 items-center justify-center rounded-lg bg-red-600 px-3 text-sm font-medium text-white w-20 hover:bg-red-800"
        >
          Previous
        </button>
        <button
          onClick={loadNextPage}
          disabled={isLastPage}
          className="mr-3 flex h-8 items-center justify-center rounded-lg bg-red-600 px-3 text-sm font-medium text-white w-20 hover:bg-red-800"
        >
          Next
        </button>
      </div>
      <div className="flex flex-wrap justify-around">
        {data?.dataMovie?.map((movie, index) => (
          <div key={index}>
            <div className="max-h-full w-12/12 rounded-xl border-4 border-[#be185d] my-10 mx-10 hover:shadow-xl hover:shadow-red-500">
              <div className="">
                <img
                  src={`${baseImg}/${movie.poster_path}`}
                  alt=""
                  className="h-[35rem] w-full rounded-lg object-cover hover:cursor-pointer"
                  onClick={() => handleGoToDetails(movie.id)}
                />
              </div>
            </div>
          </div>
        ))}
      </div>
      <FooterComponent />
    </div>
  );
};
