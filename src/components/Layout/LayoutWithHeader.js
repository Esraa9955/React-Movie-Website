import React, { useState } from 'react'
import Header from './Header'
import { Outlet } from 'react-router-dom'
import LanguageContext from '../../context/language'
const LayoutWithHeader = () => {
  const [language,setLanguage]=useState()
  return (
   <>
  
    <LanguageContext.Provider value={{language,setLanguage}}>
    <Header />
   <div className='container my-5'>
   
    <Outlet />
   </div>
    </LanguageContext.Provider>
   
   </>
        
   
   
  )
}

export default LayoutWithHeader
