import React from 'react'
import {Routes,Route} from 'react-router-dom'
import LayoutWithHeader from '../components/Layout/LayoutWithHeader'
//import Movies from '../pages/Moves'
//import MoviesDetails from '../pages/MoviesDetails'
//import WatchList from '../pages/WatchList'
//import NotFoundPage from '../pages/NotFoundPage'
//import Register from '../pages/Register'
import { Suspense } from "react";
const Movies =React.lazy(()=>import('../pages/Moves') )
const MoviesDetails =React.lazy(()=>import('../pages/MoviesDetails') )
const WatchList =React.lazy(()=>import('../pages/WatchList') )
const NotFoundPage =React.lazy(()=>import('../pages/NotFoundPage') )
const Register =React.lazy(()=>import('../pages/Moves') )

const Router = () => {
  return (
 <Suspense fallback={<h5>Loading.........</h5>}>
  <Routes>
   
    <Route element={<LayoutWithHeader />} >
    <Route path='/' element={<Movies />} />
    <Route path='/movie-details/:id' element={<MoviesDetails />} />
    <Route path='/watch-list' element={<WatchList />}/>
   </Route>
    <Route path='/register' element={<Register/>} />
   <Route path='*' element={<NotFoundPage/>}/>


  </Routes>
  </Suspense>
  )
}

export default Router
