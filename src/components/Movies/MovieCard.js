import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHeart } from '@fortawesome/free-solid-svg-icons';

import { Link } from 'react-router-dom';
import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { addToFavorites } from '../../slices/favoritesSlice';
const MovieCard = ({movieItem}) => {
  const dispatch =useDispatch();
  const [isClicked, setIsClicked] = useState(false);
  // add to favorites movies
  const addToFavHandler=(movieItem)=>{
    dispatch(addToFavorites(movieItem))
    setIsClicked(true);

  }
  
  const posterUrl = `https://image.tmdb.org/t/p/w500/${movieItem.poster_path}`;
  return (
   <>
    
    <div className="card">
    <Link to={`/movie-details/${movieItem.id}`}>
      <img src={posterUrl} className="card-img-top" alt="..."/>
      </Link>
      <div className="card-body">
          <h2 className="card-title">{movieItem.title}</h2>
          <p className="card-text">Release Date: {movieItem.release_date}</p>
          
          <FontAwesomeIcon
            onClick={() => addToFavHandler(movieItem)}
            icon={faHeart}
            color={isClicked ? 'red' : 'yellow'}
            size="lg"
            style={{ cursor: 'pointer' }}
          />
        </div>
  </div>



 
   </>
  )
}

export default MovieCard
