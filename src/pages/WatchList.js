import React from 'react';
import { useSelector } from 'react-redux';
import Fav from '../components/Movies/fav';

const WatchList = () => {
  const { favoritesmovies } = useSelector((state) => state?.favorites);

  return (
    <>
     <div className='continer'>
     <h1 className='text-4xl text-center py-5 dark:bg-gray-800 dark:text-gray-200'>My Watchlist</h1>
      <div className="row row-cols-1 row-cols-md-5 g-4">
        {favoritesmovies?.map((favorite) => {
          return <Fav key={favorite?.id} favorite={favorite} />;
        })}
      </div>
     </div>
    </>
  );
};

export default WatchList;