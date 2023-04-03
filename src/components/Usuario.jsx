import React from 'react'

export const Usuario = (usuario) => {
    console.log("🚀 ~ file: Usuario.jsx:4 ~ Usuario ~ usuario:", usuario)
    return (
    <div>
        <h3>Soy el usuario : {usuario.usuario.nombre} con el sigla {usuario.usuario.sigla}</h3>
    </div>
  )
}
