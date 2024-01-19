import React, { useState,useEffect,useContext } from 'react'
import { useLocation,useParams } from 'react-router-dom';
import { axiosInstance } from '../apis/config';
import LanguageContext from '../context/language'
const MoviesDetails = () => {
  const [movieDetails,setMovieDetails]=useState({})
  const params =useParams();
  console.log(params)
  const location = useLocation();
  console.log(location)
  //const [searchParams, setSearchParams]=useState();
  //console.log(searchParams.getAll('name'))
//  useEffect(()=>{   
//     axiosInstance
//      .get(`/movie/${params.id}`, {
//        params: { api_key: "1dd63b0f63b136e626a91725c3f5d3a0" },
//      })
//      .then((res) =>{console.log(res.data); setMovieDetails((res.data))})
//      .catch((err) => console.log(err));
//  },[]);
const { language } = useContext(LanguageContext);
useEffect(() => {
  const fetchMovieDetails = async () => {
    try {
      const response = await axiosInstance.get(`/movie/${params.id}`, {
        params: {
          api_key: '1dd63b0f63b136e626a91725c3f5d3a0',
          language: language,
        },
      });
      setMovieDetails(response.data);
    } catch (error) {
      console.error('Error fetching movie details:', error);
    }
  };

  fetchMovieDetails();
}, [params.id, language]);

  const posterUrl = `https://image.tmdb.org/t/p/w500/${movieDetails.poster_path}`;
  return (


   
   
   
    <div className="container mt-5">
    <div className="row">
      <div className="col-md-4">
        <img src={posterUrl} className="img-fluid rounded" alt={movieDetails.original_title} />
      </div>
      <div className="col-md-8">
        <h2>{movieDetails.original_title}</h2>
        <p>
          <strong>Release Date:</strong> {movieDetails.release_date}
        </p>
        <p>
          <strong>Vote Count:</strong> {movieDetails.vote_count}
        </p>
        <p>
          <strong>Vote Average:</strong> {movieDetails.vote_average}
        </p>
        <p>
          <strong>Overview:</strong> {movieDetails.overview}
        </p>
        {/* You can add more details as needed */}
      </div>
    </div>
  </div>
    
  )
}

export default MoviesDetails
