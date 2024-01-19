import React, { useContext } from 'react'
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHeart } from '@fortawesome/free-solid-svg-icons';
import { useSelector } from 'react-redux';
import LanguageContext from '../../context/language';
import { useEffect } from 'react';
const Header = () => {
 const {language,setLanguage}=useContext(LanguageContext)
 useEffect(() => {
  // Set the initial language to 'en' when the component mounts
  setLanguage('en');
}, [setLanguage]);
 document.body.dir = language === 'ar' ? 'rtl' : 'ltr';
  
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
 
  
   
    <div className='d-flex align-items-center '>
    <div className="dropdown m-2">
  <button className="bg-transparent border border-0 dropdown-toggle" type="button" data-bs-toggle="dropdown" aria-expanded="false">
    {language}
  </button>
  <ul className="dropdown-menu">
    <li><Link className="dropdown-item" to="#" onClick={()=> setLanguage('en')}>en</Link></li>
    <li><Link className="dropdown-item" to="#" onClick={()=> setLanguage('ar')}>ar</Link></li>
    
  </ul>
</div>
      
    <div className='d-flex align-items-center'>
    <FontAwesomeIcon icon={faHeart} className="heart-icon m-2" size="lg" />
    <Link to='/watch-list' className="navbar-brand m-2">watch List({favoritesmovies?.length})</Link>
    </div>

    </div>
   
  </div>
</nav>
   
   </>
  )
}

export default Header
