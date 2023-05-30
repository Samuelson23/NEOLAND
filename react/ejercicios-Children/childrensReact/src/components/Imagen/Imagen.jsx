import "./Imagen"
import React from 'react'

const Imagen = (props) => {
    const {src,alt} = props
  return (
    <img src={src} alt={alt}/>
  )
}

export default Imagen