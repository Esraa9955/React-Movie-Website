import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
//import { useParams, useLocation } from 'react-router-dom';
import { axiosInstance } from '../../apis/config';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHeart } from '@fortawesome/free-solid-svg-icons';
import { useDispatch } from 'react-redux';
import {removeFromFavorites} from '../../slices/favoritesSlice'

const Fav = ({ favorite }) => {
  const [movieDetails, setMovieDetails] = useState({});
  //const params = useParams();
  //const location = useLocation();

  useEffect(() => {
    axiosInstance
      .get(`/movie/${favorite.id}`, {
        params: { api_key: "1dd63b0f63b136e626a91725c3f5d3a0" },
      })
      .then((res) => {
        console.log(res.data);
        setMovieDetails(res.data);
      })
      .catch((err) => console.log(err));
  }, []);


    const dispatch=useDispatch();
  const removeFromfavoritesHandler=(movieDetails)=>{
    console.log('Removing from favorites:', favorite);

    
      dispatch(removeFromFavorites(movieDetails));
   
  }

  const posterUrl = `https://image.tmdb.org/t/p/w500/${movieDetails.poster_path}`;

  return (
    <div className="card flex  items-center bg-white rounded-lg shadow-md md:flex-row md:max-w-xl dark:bg-gray-900  m-2 pt-2">
      <Link to={`/movie-details/${movieDetails.id}`} className="text-black hover:text-blue-500">
        <div className="image-container">
          <img src={posterUrl} className="img-fluid rounded" alt={movieDetails.original_title} />
        </div>
      </Link>

      <div className="card-body ml-4">
        <h2 className="text-lg font-semibold">{movieDetails.original_title}</h2>
        <p className="text-sm text-gray-600">
          <strong>Release Date:</strong> {movieDetails.release_date}
        </p>

        <FontAwesomeIcon onClick={()=>removeFromfavoritesHandler(favorite)} icon={faHeart} color="red" size="lg" style={{ cursor: 'pointer' }} />
      </div>
    </div>
  );
};

export default Fav;