import React, { useState } from 'react'

import Header from './Header'
const Ejercicio2 = () => {

  const [counter , setCounter] =useState(0)

  const handleCounter =()=>{
    setCounter(counter + 1)
  }

  return (
    <>
    <div className='ej-container'>
    <Header 
    titulo="Ejercicio 2:
    Contador de Clics"
    enunciado="Crea una página con un botón que diga 'Contar clics' y un texto inicial que muestre 'Clics: 0'. Cada vez que se haga clic en el botón, el texto debe actualizarse para mostrar el número total de clics realizados."/>

    <div className='ej2-counter'>
      <div className='counter'>Contador: {counter}</div>
      <button className='button btn-ej2' onClick={handleCounter}>Click me</button>  
    </div>

    </div>
    </>
  )
}

export default Ejercicio2