import {createSlice} from '@reduxjs/toolkit'
const initialState={
  favoritesmovies:localStorage.getItem('favoritesmovies') ? JSON.parse(localStorage.getItem('favoritesmovies')) :[]

}
const favoritesSlice = createSlice({
  name:'favorites',
initialState,
 
  reducers:{
    //Add To favorites 
    addToFavorites:(state,action)=>{
     //console.log('favorites movie date',action.payload)

     //if the movie is already exists in the favorites list then don't add it again block it
      let existsItemIndex =state.favoritesmovies?.findIndex((item)=>item.id === action.payload?.id)
      if(existsItemIndex>=0) {
        alert('This movie already exists in your watchList')
      }
      else{
        //add the movie to favorites list
     let buildFavoritesList ={...action.payload}
     state.favoritesmovies?.push(buildFavoritesList)
     localStorage.setItem('favoritesmovies',JSON.stringify(state.favoritesmovies))
        
      }
     
    },
    //clear all favorites movies
    clearAllFavorites:(state,action)=>{
      state.favoritesmovies=[];
    },
    //remove from favorites movies
    removeFromFavorites: (state, action) => {
      let filteredMovies = state.favoritesmovies?.filter((item) => item?.id !== action.payload?.id);
      //state.favoritesmovies?.splice(filteredMovies,1);
      state.favoritesmovies = filteredMovies;
      localStorage.setItem('favoritesmovies', JSON.stringify(state.favoritesmovies));
    }
  }

})
export const{addToFavorites,removeFromFavorites,clearAllFavorites}=favoritesSlice.actions;
export default  favoritesSlice.reducer