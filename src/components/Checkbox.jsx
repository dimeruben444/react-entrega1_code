
import React from 'react'

function Checkbox({id, titulo, ischecked ,handlechecked}) {

  const pasarId =()=>{
    handlechecked(id)
  }

  return (
    <>
    
    <label htmlFor={id}>{titulo}</label>
    <input type="checkbox" name={id} id={id} value={id} checked={ischecked} onChange={pasarId}/>
    </>
    )
}

export default Checkbox