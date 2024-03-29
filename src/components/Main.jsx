import React, { useEffect, useState } from "react";
import requests from "../Request";
import axios from "axios";

const Main = () => {
  const [movies, setmovies] = useState([]);

  const movie = movies[Math.floor(Math.random() * movies.length)];

  useEffect(() => {
    axios.get(requests.requestPopular).then((response) => {
      setmovies(response.data.results);
    });
  }, []);

//   console.log(movie);

const trumcrateString = (str, num) =>{
    if(str?.length>num){
        return str.slice(0,num) + '...'
    }else{
        return str
    }
}

  return (
    <div className="w-full text-white h-[550px]">
      <div className="h-full w-full">
        <div className="absolute w-full h-[550px] bg-gradient-to-r from-black"></div>
        <img
          className="w-full h-full object-cover"
          src={`https://image.tmdb.org/t/p/original/${movie?.backdrop_path}`}
          alt={movie?.title}
        />
        <div className="absolute w-full top-[20%] p-4 md:p-8">
          <h1 className="text-3xl md:text-5xl font-bold">{movie?.title}</h1>
          <div className="my-4">
            <button className="border bg-gray-300 text-black border-gray-300 py-2 px-5">
              Play
            </button>
            <button className="border text-white border-gray-300 ml-4 py-2 px-5">
              Watch Later
            </button>
          </div>
          <p className="w-full text-gray-200 md:max-w-[70%] lg-max-[50%] xl:max-w-[35%]">{trumcrateString(movie?.overview, 150)}</p>
        </div>
      </div>
    </div>
  );
};

export default Main;
