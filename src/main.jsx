import React from 'react'
import ReactDOM from 'react-dom/client'
import "./styles/styles.css"
import { Nav } from './components/Nav'
import { Footer } from './components/Footer'
import { Conteiner_incio } from './components/Conteiner_incio'
import { InconWP } from './components/InconWP'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Nav/>
    <Conteiner_incio/>
    <InconWP/>
    <Footer/>
  </React.StrictMode>,
)
