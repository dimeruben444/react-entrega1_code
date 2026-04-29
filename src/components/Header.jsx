import React from 'react'

const Header = ({titulo , enunciado}) => {
  return (
    <>
      <div className='header-container'>
        <ul className='header-nav'>
        <li><a href="/">Home</a></li>
        <li><a href="/ejercicio1">Ejercicio 1</a></li>
        <li><a href="/ejercicio2">Ejercicio 2</a></li>
        <li><a href="/ejercicio3">Ejercicio 3</a></li>
        <li><a href="/ejercicio4">Ejercicio 4</a></li>
        <li><a href="/ejercicio5">Ejercicio 5</a></li>
        <li><a href="/ejercicio6">Ejercicio 6</a></li>
        <li><a href="/ejercicio7">Ejercicio 7</a></li>
        <li><a href="/ejercicio8">Ejercicio 8</a></li>
        <li><a href="/ejercicio9">Ejercicio 9</a></li>
        
      </ul>
       <h1 style={{ whiteSpace: "pre-line" }}>{titulo}</h1>
        <p style={{ whiteSpace: "pre-line" }}>{enunciado}</p>
      </div>
    </>
  )
}

export default Header