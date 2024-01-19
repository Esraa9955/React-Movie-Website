import React from 'react'
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHeart } from '@fortawesome/free-solid-svg-icons';
import { useSelector } from 'react-redux';
const Header = () => {
  
  const { favoritesmovies } = useSelector((state) => state?.favorites);
  return (
   <>
   <nav className="navbar bg-warning">
  <div className="container-fluid">
    <Link to='/' className="navbar-brand">Movie App</Link>
    <form className="d-flex" role="search">
      <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search" />
      <button className="btn btn-outline-success" type="submit">Search</button>
      
    </form>
    <div className=''>
    <FontAwesomeIcon icon={faHeart} color="white" size="lg" />
    <Link to='/watch-list' className="navbar-brand mx-1">watch List({favoritesmovies?.length})</Link>

    </div>
   
  </div>
</nav>
   
   </>
  )
}

export default Header
