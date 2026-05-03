import React, { useState } from 'react'

import Header from './Header'
import { useFormState } from 'react-dom'
const Ejercicio8 = () => {

  const [textArea , setTextArea] = useState("")
  
  const countWords = (text) => {
  if (!text.trim()) return 0;  // si está vacío, 0 palabras
    return text.trim().split(/\s+/).length;
  };


  const caracteres = textArea.replace(/\s+/g, "").length

  const palabras = countWords(textArea)



  return (
    <>
    <div className='ej-container'>
    <Header 
    titulo="Ejercicio 8:
    Contador de Palabras y Caracteres "
    enunciado="Crea una página con un campo de texto donde el usuario pueda escribir un párrafo. 
    • Muestra en tiempo real el número de caracteres y palabras ingresados debajo del campo. 
    • Palabras deben ser separadas por espacios, y los caracteres no deben incluir espacios ni saltos de línea."/>
    <div className='ej8-caracteres'>

    <textarea name="" id="" value={textArea} onChange={(e)=>{setTextArea(e.target.value)}}></textarea>

    <div>Numero de caracteres:{caracteres}</div>
    <div>Numero de palabras:{palabras}</div>


    </div>

    </div>

    
    </>
  )
}

export default Ejercicio8