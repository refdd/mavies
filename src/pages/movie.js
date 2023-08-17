import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchMovie } from "../redux/movieActions";
import { useParams } from "react-router-dom";
import Header from "../components/Header";
import Singelheader from "../components/Singelheader";
import OverView from "../components/OverView";

function Movie() {
  const { id } = useParams();
  const dispatch = useDispatch();
  const movieData = useSelector((state) => state.movie.data);
  const error = useSelector((state) => state.movie.error);

  useEffect(() => {
    dispatch(fetchMovie(id));
  }, [dispatch, id]);

  if (error) {
    return <div>Error: {error}</div>;
  }

  if (!movieData) {
    return <div>Loading...</div>;
  }
  console.log(movieData);
  return (
    <div
      className={` h-screen bg-gradient-to-b from-[#ffffff17] to-black  thelg:h-[140vh]  `}
    >
      <Header />
      <Singelheader imgaeSrc={movieData?.movieData} />
      <OverView movieData={movieData?.movieData} />
    </div>
  );
}

export default Movie;
