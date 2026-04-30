import React, { useState } from 'react'

import Header from './Header'
const Ejercicio6 = () => {

  const [segundos , setSegundos]= useState(0)


  const formateadorSegundos =(numeroSegundos)=>{

    
  const horas = numeroSegundos/60
    
    
  }






  return (
    <>
    <div className='ej-container'>
    <Header 
    titulo="Ejercicio 6:
     Temporizador con Inicio, Pausa y Reinicio "
    enunciado="Crea una página con un temporizador que comience en 00:00:00. Incluye tres botones: “Iniciar”, “Pausar” y “Reiniciar”. 
    • Al hacer clic en “Iniciar”, el temporizador debe comenzar a contar los segundos, minutos y horas. 
    • “Pausar” detiene el conteo pero mantiene el tiempo actual. 
    • “Reiniciar” pone el temporizador en 00:00:00."/>

    <div className='ej6-temporizador'>

    <h3></h3>
    <div>
      <button>Inicio</button>
      <button>Pausa</button>
      <button>Reset</button>
    </div>



    </div>

    </div>

    
    </>
  )
}

export default Ejercicio6