import "./Main.css"
import React from 'react'

const Main = (props) => {
    const {subt,img} = props
  return (
    <main>{subt}{img}</main>
  )
}

export default Main