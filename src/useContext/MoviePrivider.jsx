 import { useReducer, useState } from 'react';
import { shoppingReducer, stateInitial } from '../reducers/ShoppingReducer';
import {MovieContext} from'./MovieContext';

 export const MovieProvider =({children})=>{
    const [movieState, movieDispatch]=useReducer(shoppingReducer, stateInitial)
    return(
        <MovieContext.Provider value={{movieState, movieDispatch}}>
          {children}
        </MovieContext.Provider>
    )
 }