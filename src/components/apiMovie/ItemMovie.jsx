import React from 'react'

const ItemMovie = ({id, title, img, descripcion, votes}) => {
    const URL_IMG='https://image.tmdb.org/t/p/w500/'
  return (
    <div className='col-md-3 row border border-dark'>
        <h4 className='col-md-12'>{title}</h4>
        <img src={`${URL_IMG}${img}`} alt="" width={300} height={200} />
        <p className='fs-4'>{descripcion}</p>
        <hr />
        <section className='row justify-content-between'>
            <span className='fs-3 col-md-3 text-danger'>{votes}</span>
            <button className='fs-3 col-md-4 m-3'>comprar</button>
        </section>
    </div>
  )
}

export default ItemMovie