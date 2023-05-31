import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'

//importar paginas
import Home from './Pages/Home/Home.jsx'
import About from './Pages/About/About.jsx'
import Listado from './Pages/Listado/Listado.jsx'

//importar BrowseRouter, Routes y Route de react-router-dom (npm i react-router-dom)
import { BrowserRouter, Route, Routes } from 'react-router-dom'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    {/* El BROWSER ROUTER es donde le indicamos la ruta de inicio a la aplicacion (baserute), en este caso "/" */}
    <BrowserRouter basename='/'>
      {/* Le metemos las rutas individuales de la aplicacion. Con "Routes" inicializamos el proceso de crear rutas */}
      <Routes>
        {/* Son cada una de las rutas individuales de nuestra aplicacion */}
        {/* La primera ruta es la ruta padre (la inicial) y le indicamos que el elemento es App pq es el que controla toda nuestra app */}
        <Route path="/" element={<App/>}>
          {/* Dentro de la ruta padre (app) creamos las rutas hijas que son las que nos llevaran a cada una de las paginas */}
          <Route index element={<Home/>}/>
          <Route path="/About" element={<About/>}/>
          <Route path="/Listado" element={<Listado/>}/>
          <Route path="*" element={<main><p>Route Not Found</p></main>}/>
     
        </Route>
      </Routes>
    </BrowserRouter>
  </React.StrictMode>,
)
