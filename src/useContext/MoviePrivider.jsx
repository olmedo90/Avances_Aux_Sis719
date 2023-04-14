 import { useState } from 'react';
import {MovieContext} from'./MovieContext';

 export const MovieProvider =({children})=>{
    const [shopping, setShoppin]=useState({pelicula:'Mulan'})
    return(
        <MovieContext.Provider value={[shopping, setShoppin]}>
          {children}
        </MovieContext.Provider>
    )
 }