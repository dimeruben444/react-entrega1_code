import React from 'react'

import Header from './Header'
const Ejercicio7 = () => {
  return (
    <>
    <div className='ej-container'>
    <Header 
    titulo="Ejercicio 7:
    Generador de Contraseñas Aleatorias"
    enunciado="Crea una página con un campo de entrada para especificar la longitud de una contraseña y un botón que diga “Generar contraseña”. 
    • Al hacer clic en el botón, se debe mostrar una contraseña generada aleatoriamente usando letras, números y caracteres especiales. 
    • Si la longitud es menor a 4 o el campo está vacío, muestra un mensaje de error indicando que la longitud debe ser mayor o igual a 4."/>
    

    </div>

    
    </>
  )
}

export default Ejercicio7