import React from 'react'
import {useState} from 'react'  //Para PERSISTIR ESTADOS
import { useEffect } from 'react' //Para resolver problemas de sincronizacion
/* Se ejecuta de manera secundaria (al final, luego del montaje) */
/* Las tareas pesadas o sincronicas, debo ejecutarlas al final con useEffect */

const ItemListContainer = () => {
  //Hacemos un contador
  const [count, setCount]=useState(0) //devuelve un array con dos posicion 0,1
  /* Los HOOK deben ejecutarse SIEMPRE, no pueden estar dentro de ciclos o condicionales */

  const handleCount = () =>{
      setCount(count+1)
  }

  useEffect(()=>{
      console.log("Disparo 1") //Se ejecuta después que disparo 2
  })

  console.log("Disparo 2")

  useEffect(()=>{
      console.log("Un solo disparo")
  },[]) //Si agrego como parámetro un array vacío, se ejecuta solo una vez


    return (
    <>
    <div>ItemListContainer</div>
    <button onClick={handleCount}>Click</button>
    {/* Cada vez que se dispara el evento, se reinicia la funcion */}
    {/* y el contador, regresa a cero, por ello debemos corregir esto */}
    {/* Entonces => DEBEMOS GUARDAR O PERSISTIR EL ESTADO */}    
    <label>{count}</label>
    </>
  )
}

export default ItemListContainer