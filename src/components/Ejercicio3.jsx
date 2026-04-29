import React, { useState } from 'react'
import Header from './Header'
const Ejercicio3 = () => {

  const [arrTodo , setTodo] = useState([])
  const [input , setInput] = useState("")

  const handleChange =(e)=>{
    setInput(e.target.value)
  }

  const handleButton =()=>{

    if(input === ""){
      return
    }
    setTodo([
      ...arrTodo,
      input
    ])

    setInput("")

  }

  return (
    <>
    <div className='ej-container'>
    <Header 
    titulo="Ejercicio 3: 
    Lista Dinámica "
    enunciado='Crea una página con un campo de texto, un botón que diga "Agregar", y una lista vacía debajo. 
    ● Cuando el usuario escriba un texto y haga clic en "Agregar", 
    el texto debe añadirse como un nuevo elemento de la lista. 
    ● Añade un botón al lado de cada elemento para eliminarlo de la lista.'/>
    


    <div className='ej3'>
      <input type="text" value={input} onChange={handleChange}/>
      <button className='button' onClick={handleButton}>Añadir</button>

      <ul className='ej3-ul'>
          {arrTodo.map((elemento, indice)=>{
            return<li key={indice}>{elemento} <button>x</button></li>
          })}
      </ul>


    </div>
    </div>
    
    </>
  )
}
export default Ejercicio3