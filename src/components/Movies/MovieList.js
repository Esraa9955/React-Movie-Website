import React, { useContext } from "react";
import { useEffect, useState } from "react";

import { axiosInstance } from "../../apis/config";
import MovieCard from "./MovieCard";
import LanguageContext from "../../context/language";
console.log(axiosInstance);

const MovieList = () => {
  const [movies, setMovies] = useState([]);
  //const [searchQuery, setSearchQuery] = useState('');
  const {language}=useContext(LanguageContext)
//useEffect(() => {
//   axiosInstance
//      .get("/movie/popular", {
//        params: { api_key: "1dd63b0f63b136e626a91725c3f5d3a0" },
//      })
//      .then((res) =>{console.log(res.data.results); setMovies((res.data.results))})
//      .catch((err) => console.log(err));
//  }, []);*

  useEffect(() => {
    const fetchMovies = async () => {
      try {
        const response = await axiosInstance.get('/movie/popular', {
          params: {
            api_key: '1dd63b0f63b136e626a91725c3f5d3a0',
            language: language,
          },
        });
        setMovies(response.data.results);
      } catch (error) {
        console.error('Error fetching popular movies:', error);
      }
    };

    fetchMovies();
  }, [language]);
  return (
    <>
      <h1>Popular Movie</h1>
      <hr />
      <div className="row row-cols-1 row-cols-md-3 g-4">
        {movies.map((movie) => {
          return <div className="col" key={movie.id}>
           <MovieCard movieItem={movie}/>
          </div>;
        })}
      </div>
    </>
  );
};

export default MovieList;
