import React, { useEffect, useState } from 'react'

import Header from './Header'
import Checkbox from './Checkbox'
import { compile } from 'sass'

const Ejercicio9 = () => {

  const [todo, setTodo] = useState("")
  const [arrTodos , setArrTodos] = useState([])
  const [isLoaded , setIsLoaded] = useState(false)
  

  const handleChange =(e)=>{
    setTodo(e.target.value)

  }

  const handleGuardar =()=>{
    const newTodoItem={
      tittle: todo,
      completed: false
    }

    setArrTodos([
      ...arrTodos,
      newTodoItem
    ])
    setTodo("")
  }

  const handleLimpiar =() =>{
    const newLimpiadas = arrTodos.filter((item)=>{
      return item.completed ===false
    })

    setArrTodos(newLimpiadas)
  }

  const handlechecked =(id)=>{

    const newArr = arrTodos.map((item, index )=>{

      if (index === id){
        return{
         ...item, 
         completed: !item.completed
        }
      }else{
        return item
      }

    })

    setArrTodos(newArr)  
  }

  useEffect(()=>{
    if(isLoaded){
      localStorage.setItem( "lista" , JSON.stringify(arrTodos))
    }  
  },[arrTodos, isLoaded])

  useEffect(()=>{
    const arrlocal = JSON.parse(localStorage.getItem( "lista"))

    arrlocal? setArrTodos(arrlocal) : setArrTodos([])

    setIsLoaded(true)
    
  },[])

   
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


    <div className='ej9-todos'>
      <div>
        <input type="text" value={todo} onChange={handleChange} />
        <button onClick={handleGuardar}>Guardar</button>
        <button onClick={handleLimpiar}>Limpiar</button>
      </div>

      
      <div className='ej9-todos-list' >
        {arrTodos.map((item, index)=>{
          return(
            <div className='ej9-todos-list-item' key={index}>
              <Checkbox id={index} titulo={item.tittle} ischecked={item.completed} 
               handlechecked={handlechecked}/>
            </div> 
          )
        })}
      </div>

    </div>
    </div> 
    </>
  )
}

export default Ejercicio9