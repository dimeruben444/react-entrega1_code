import React, { useState } from 'react'

import Header from './Header'
const Ejercicio5 = () => {

  const[ input1, setInput1] = useState("")
  const[ input2, setInput2] = useState("")
  const[ result, setResult] = useState("")
  const[signo ,setSigno] = useState("")

  const handlevalue1 =(e)=>{
    setInput1(e.target.value)

  }

  const handlevalue2 =(e)=>{
    setInput2(e.target.value)

  }

  const handleSuma =()=>{
    if(input1==="" || input2 ===""){
      alert('campo vacio')
    }
    setSigno("+")
    const suma = Number(input1) + Number(input2)

    setResult(suma)
  }

  const handleResta =()=>{

    if(input1==="" || input2 ===""){
      alert('campo vacio')
    }
    setSigno("-")
    const resta = Number(input1) - Number(input2)

    setResult(resta)
  }

  const handleMulti =()=>{
    if(input1==="" || input2 ===""){
      alert('campo vacio')
    }
    setSigno("x")
    const multi = Number(input1) * Number(input2)

    setResult(multi)
  }

  const handleDivi =()=>{
    if(input1==="" || input2 ==="" ||input2== 0 ){
      alert('campo vacio no se pude dividir por 0')
      setInput2("")
    }
    setSigno("/")
    

    const divi = Number(input1) / Number(input2)

    setResult(divi)
  }



  
  return (
    <>
    <div className='ej-container'>
    <Header 
    titulo="Ejercicio 5:
    Calculadora Sencilla"
    enunciado="Ejercicio: 
      Crea una página con dos campos de entrada de números y cuatro botones: 'Sumar', 'Restar' 'Multiplicar', y 'Dividir'. 
      ● Al hacer clic en cualquiera de los botones, debe mostrarse el resultado de la operación en un área de texto o debajo de los botones. 
      ● Asegúrate de validar los datos para evitar errores (como división por cero o entradas vacías). "/>
       
       <h2>CALCULADORA</h2> 
      <div className='ej5-calculator'>

        <input type="number" className='ej5-value1' value={input1} onChange={handlevalue1}/>
        <div className='ej5-signo'>{signo}</div>
        <input type="number" className='ej5-value2' value={input2} onChange={handlevalue2}/>
        <div>=</div>
        <input type="number" disabled className='ej5-result' value={result}/>


      </div>

      <div className='ej5-buttons'>
        <button className='button ej5-button' onClick={handleSuma}>+</button>
        <button className='button ej5-button' onClick={handleResta}>-</button>
        <button className='button ej5-button' onClick={handleMulti}>x</button>
        <button className='button ej5-button' onClick={handleDivi}>/</button>
      </div>
      

    </div>

    
    </>
  )
}
export default Ejercicio5