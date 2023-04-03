import React, { useState } from 'react'

const CustomHoook = () => {
    const [materia, setMateria]= useState('Seguridad');

    const sigla = ()=>{
        setMateria('sis737')
    }
    return (
    <div>
        <h4>Cambio de estados</h4>
        <h5>{materia}</h5>
        <button onClick={()=>sigla()}>Sigla</button>
    </div>
  )
}

export default CustomHoook