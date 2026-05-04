import React, { useState, useRef } from "react";

import Header from "./Header";
const Ejercicio6 = () => {
  const [tick, setTick] = useState(0);
  const intervaloRef = useRef(null);

  const handleInicio = () => {
    if (intervaloRef.current) return;
    intervaloRef.current = setInterval(() => {
      setTick((t) => t + 1);
    }, 10);
  };

  const handlePausa = () => {
    clearInterval(intervaloRef.current);
    intervaloRef.current = null;
  };

  const handleReset = () => {
    clearInterval(intervaloRef.current);
    setTick(0);
    intervaloRef.current = null;
  };

  const formaterTick = (tick) => {
    
    let minutos = Math.trunc(tick / 6000);
    let resto = tick - minutos * 6000;
    let segundos = Math.trunc(resto / 100);
    let centesimas = Math.trunc(resto - segundos * 100);

    let mm = minutos < 10 ? `0${minutos}` : `${minutos}`;
    let ss = segundos < 10 ? `0${segundos}` : `${segundos}`;
    let cc = centesimas < 10 ? `0${centesimas}` : `${centesimas}`;

    return (`"${mm}:${ss}:${cc}"`)
  };


  const tickFormateado = formaterTick(tick)



  return (
    <>
      <div className="ej-container">
        <Header
          titulo="Ejercicio 6:
     Temporizador con Inicio, Pausa y Reinicio "
          enunciado="Crea una página con un temporizador que comience en 00:00:00. Incluye tres botones: “Iniciar”, “Pausar” y “Reiniciar”. 
    • Al hacer clic en “Iniciar”, el temporizador debe comenzar a contar los segundos, minutos y horas. 
    • “Pausar” detiene el conteo pero mantiene el tiempo actual. 
    • “Reiniciar” pone el temporizador en 00:00:00.
    (hize milesimas y segundos y minutos para que fuera mas visual)"
        />

        <div className="ej6-temporizador">
          <h2>{tickFormateado}</h2>
          <div className="ej6-button-container">
            <button className="button ej6-button" onClick={handleInicio}>Start</button>
            <button className="button ej6-button" onClick={handlePausa}>Stop</button>
            <button className="button ej6-button" onClick={handleReset}>Reset</button>
          </div>
        </div>
      </div>
    </>
  );
};

export default Ejercicio6;
