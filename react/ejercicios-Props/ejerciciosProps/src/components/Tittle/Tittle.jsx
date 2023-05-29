import "./Tittle.css"
import React from 'react'

const Tittle = (props) => {
    const {data} = props
  return (
    <h1>{props.data}</h1>
  )
}

export default Tittle