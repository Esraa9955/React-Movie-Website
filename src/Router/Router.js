import React from 'react'
import {Routes,Route} from 'react-router-dom'
import LayoutWithHeader from '../components/Layout/LayoutWithHeader'
import Movies from '../pages/Moves'
import MoviesDetails from '../pages/MoviesDetails'
import WatchList from '../pages/WatchList'
import NotFoundPage from '../pages/NotFoundPage'
import Register from '../pages/Register'
const Router = () => {
  return (
  <Routes>
   
    <Route element={<LayoutWithHeader />} >
    <Route path='/' element={<Movies />} />
    <Route path='/movie-details/:id' element={<MoviesDetails />} />
    <Route path='/watch-list' element={<WatchList />}/>
   </Route>
    <Route path='/register' element={<Register/>} />
   <Route path='*' element={<NotFoundPage/>}/>


  </Routes>
  )
}

export default Router
