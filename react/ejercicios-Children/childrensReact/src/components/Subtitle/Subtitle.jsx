import "./Subtitle.css"
import React from 'react'

const Subtitle = (props) => {
    const {data} = props
  return (
    <h2>{data}</h2>
  )
}

export default Subtitle