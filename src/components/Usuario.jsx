import React, { useContext } from 'react'
import { MovieContext } from '../useContext/MovieContext';

export const Usuario = () => {
  const date='seminario';
  const [shopping,setShopping]=useContext(MovieContext)
  return (
    <div>
      <Usuario2 date={date}/>
      <h2>{shopping.pelicula}</h2>
    </div>
  )
}
export const Usuario2 = ({date}) => {
  
  return (
    <div>
      <h1>usuario:{date}</h1>
      <Usuario3 date={date}/>
    </div>
  )
}
export const Usuario3 = ({date}) => {
  
  return (
    <div>
      <h2>usuario:{date}</h2>
      <Usuario4 date={date}/>
    </div>
  )
}
export const Usuario4 = ({date}) => {
  const [shopping,setShopping]=useContext(MovieContext)
  return (
    <div>
      <h3>usuario:{date}
      {shopping.pelicula}
      </h3>
      
    </div>
  )
}
