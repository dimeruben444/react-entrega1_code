import React, {  useEffect, useState } from 'react'

import Header from './Header'


const Ejercicio4 = () => {
  const productos = [
  "Camiseta básica",
  "Pantalón vaquero",
  "Zapatillas deportivas",
  "Sudadera con capucha",
  "Chaqueta ligera",
  "Gorra ajustable",
  "Mochila urbana",
  "Reloj digital",
  "Gafas de sol",
  "Auriculares inalámbricos",
  "Botella reutilizable",
  "Cartera de piel",
  "Cinturón clásico",
  "Teclado mecánico",
  "Ratón inalámbrico",
  "Monitor 24 pulgadas",
  "Altavoz Bluetooth",
  "Powerbank 10.000 mAh",
  "Pendrive 64GB",
  "Lámpara LED de escritorio"
  ];

  const [input ,setInput]= useState("")
  

  const handleChange =(e)=>{
    setInput(e.target.value)
  }
  
  const listafiltrada = productos.reduce((acum, item)=>{
    if (item.toLowerCase().includes(input.toLowerCase())){
      acum.push(item)
    }
    return acum
  },[])


  return (
    <>
    <div className='ej-container'>
    <Header 
    titulo="Ejercicio 4:
     Filtro de Búsqueda en Tiempo Real "
    enunciado="Crea una página con un campo de texto y una lista predefinida de elementos. 
      ● Mientras el usuario escribe en el campo, la lista debe actualizarse en tiempo real para mostrar solo los elementos que contienen el texto escrito. 
      Ejemplo: Si la lista contiene ['Perro', 'Gato', 'Pez'] y el usuario escribe 'Ga', solo 'Gato' debe quedar visible."/>

      <input type="text" value={input} onChange={handleChange} className='ej4-input'placeholder='introduce producto'/>
      
      <ul className='ej4-list'>
        {listafiltrada.map((item , index)=>{
          return <li key={index}>{item}</li>
        })}
        
      </ul>

    </div>

    
    </>
  )
}
export default Ejercicio4