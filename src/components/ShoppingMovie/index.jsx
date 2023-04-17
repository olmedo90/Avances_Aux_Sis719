import React, { useContext } from 'react'
import { Types } from '../../types/Types';
import { MovieContext } from '../../useContext/MovieContext'

const ShoppingMovie = () => {
  const URL_IMG = "https://image.tmdb.org/t/p/w500/";
 
  const {movieState, movieDispatch}= useContext(MovieContext);
  const removeShoppin = (id)=>{
    movieDispatch({type:Types.REMOVE_SHOPPING, payload:id})
  }
  const removeAll =()=>{
    movieDispatch({type:Types.CLEAN_SHOPPING})
  }
    return (
    <div >
      <h2>My Shopping Cart</h2>
      <button className='btn btn-warning' onClick={()=>removeAll()}>Remove All</button>
      <div className=' row'>
      {
        movieState.shoppingMovie.map((item, index)=>(
          <section className='col-md-3 ' key={index}>
            <h5>{item.title}</h5> 
            <button className='btn btn-danger' onClick={()=>removeShoppin(item.id)}>Remove</button>
            <img src={`${URL_IMG}${item.img}`} alt="" />
          </section>
        ))
      }
      </div>
    </div>
  )
}

export default ShoppingMovie