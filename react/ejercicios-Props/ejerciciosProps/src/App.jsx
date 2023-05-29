import { useState } from 'react'
import './App.css'
import Tittle from './components/Tittle/Tittle'
import Subtittle from './components/Subtittle/Subtittle'
import Paragraph from './components/Paragraph/Paragraph'
import Imagen from './components/Imagen/Imagen'


function App() {
  const tittle = "Welcome to Components ReactJS"
  const subtittle = "This is an example components with ReactJS"
  const paragraph = "Este es un parrafo de prueba de ReactJS"
  const src = "https://res.cloudinary.com/dy25vd1yu/image/upload/v1685367485/pngwing.com_2_gytymv.png"
  const alt= "ReactLogo"

  return (
    <>
      <Tittle data={tittle}/>
      <Subtittle data={subtittle}/>
      <Paragraph data={paragraph}/>
      <Imagen src={src} alt={alt}/>

    </>
  )
}

export default App
