import React, { useState } from 'react'
import Header from './Header'

const Ejercicio1 = () => {

  const [color , setColor] = useState('#141414')

  function randomHexColor() {
    const hex = Math.floor(Math.random() * 0xFFFFFF).toString(16).padStart(6, '0');
    return `#${hex}`;
  }

  const changeColor =()=>{
    setColor(randomHexColor())
    
  }

  document.body.style.backgroundColor = color

  return (
    <>
    <div className='ej-container'>
    <Header 
    titulo="Ejercicio 1:
    Cambiador Color de Fondo"
    enunciado="Crea una página web con un botón que diga 'Cambiar color'. Cada vez que el usuario haga clic en el botón, el color de fondo de la página debe cambiar a un color aleatorio."/>

    <button className='button btn-ej1'onClick={changeColor}>Click me</button>

    </div>

    
    </>
  )
}

export default Ejercicio1
