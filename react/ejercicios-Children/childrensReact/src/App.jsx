import { useState } from 'react'
import './App.css'
import Title from './components/Title/Title'
import Subtitle from './components/Subtitle/Subtitle'
import Imagen from './components/Imagen/Imagen'
import Paragraph from './components/Pragraph/Paragraph'
import Header from './components/Header/Header'
import Main from './components/Main/Main'
import Footer from './components/Footer/Footer'

function App() {
  const title = "Titulo del apartado CHILDRENS"
  const subtitle = "Subtitulo del apartado Childrens"
  const src="https://res.cloudinary.com/dy25vd1yu/image/upload/v1685367485/pngwing.com_2_gytymv.png"
  const alt="ReactLogo"
  const paragraph = "Este es el parrafo"
 
  return (
    <>

     <Header children={<Title data={title}/>}/>
     <Main subt={<Subtitle data={subtitle}/>} img={<Imagen src={src} alt={alt}/>}/>
     <Footer parag={<Paragraph data={paragraph}/>}/>
     
     
    </>
  )
}

export default App
