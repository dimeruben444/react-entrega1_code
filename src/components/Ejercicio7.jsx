import React, { useState } from 'react'

import Header from './Header'
const Ejercicio7 = () => {

  const caracteresPassword = [
    "a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z",
    "A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z",
    "0","1","2","3","4","5","6","7","8","9",
    "!","@","#","$","%","^","&","*","(",")","_","+","-","=","{","}","[","]","|",":",";","\"","'","<",">",",",".","?","/"
  ];


  const [longitud, setinputnumber] = useState("")
  const [pasword, setpasword] = useState("")

 const handlechange =(e)=>{
  setinputnumber(e.target.value)
 }

 const generarContraseña =(longitud)=>{

  if(longitud =="" || longitud < 4){
    alert('la longitud debe ser mayor de 4')
  }


    let elegido =""
    let contraseña =""
    
    for(let i =0 ; i< longitud; i++){
      elegido = caracteresPassword[Math.floor(Math.random() * 91)]
      contraseña += elegido
      console.log(contraseña)
    }
    setpasword(contraseña)
  }





  return (
    <>
    <div className='ej-container'>
    <Header 
    titulo="Ejercicio 7:
    Generador de Contraseñas Aleatorias"
    enunciado="Crea una página con un campo de entrada para especificar la longitud de una contraseña y un botón que diga “Generar contraseña”. 
    • Al hacer clic en el botón, se debe mostrar una contraseña generada aleatoriamente usando letras, números y caracteres especiales. 
    • Si la longitud es menor a 4 o el campo está vacío, muestra un mensaje de error indicando que la longitud debe ser mayor o igual a 4."/>
    
    <div className='ej7-generador'>
      <h2>Generador Contraseña </h2>
      <input type="number" placeholder='introduce longitud' value={longitud} onChange={handlechange} />
      <button onClick={()=>{generarContraseña(longitud)}}>Generar</button>
      <input type="text" disabled value={pasword}/>
      

    </div>

    </div>

    
    </>
  )
}

export default Ejercicio7