import React from 'react'

import Header from './Header'
const Ejercicio9 = () => {
  return (
    <>
    <div className='ej-container'>
    <Header 
    titulo="Ejercicio 9:
    Lista de Tareas con LocalStorage"
    enunciado="Crea una aplicación de lista de tareas. 
    • Cada tarea debe incluir un texto y un checkbox para marcarla como completada. 
    • Las tareas se deben guardar en localStorage para que persistan incluso si la página se recarga. 
    • Debe incluir un botón para limpiar todas las tareas completadas y actualizar el localStorage."/>
    

    </div>

    
    </>
  )
}

export default Ejercicio9