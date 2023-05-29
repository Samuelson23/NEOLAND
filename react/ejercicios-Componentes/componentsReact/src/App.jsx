import { Imagen, Paragraph, Subtittle, Tittle } from './components/indexBarril'
import './App.css'

/*
1- Crea los siguientes componentes:
    -Tittle: Crea un componente <h1> con el texto "Welcome to Components ReactJS"
    -Subtittle: Crea un componente <h2> con el texto "This is a example components with ReactJS"
    -Image: Crea un componente imagen <img> 
    -Paragraph: Crea un componente paragraph <p> con el texto que quieras

*/

function App() {

  return (
    <>
      <Tittle/>
      <Subtittle/>
      <Paragraph/>
      <Imagen/>
    </>
  )
}

export default App
