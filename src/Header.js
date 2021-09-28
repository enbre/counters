import React from 'react'
import './CSS/Header.css'

function Header(props) {
   return (
      <div className="Counter-header">
      <>
         <h1>Counters: {props.counterNum} </h1>
         <button onClick={props.decreaseCounters} disabled = {props.counterNum<1} >-</button>
         <button onClick={props.increaseCounters}>+</button>
      </>   
      <>
         <h2>Base increment: {props.increment}</h2>
         <button onClick={props.decreaseIncrement}>-</button>
         <button onClick={props.increaseIncrement}>+</button>
      </>
      </div>
   )
}

export default Header
