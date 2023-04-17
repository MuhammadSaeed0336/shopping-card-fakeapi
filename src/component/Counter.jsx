import React from 'react'
import { useReducer } from 'react'
import reducer from '../context/Reducer'


const Counter = () => {
  const [state, dispatch] = useReducer(reducer, 0)
  return (
    <>
    <h3>{state===0 ? "Zero" : state}</h3>
    <button onClick={()=>{dispatch({type: 'increment', payload:''})}}>Increment</button>
    <button onClick={()=>{dispatch({type: 'reset', payload:''})}}>Reset</button>
    <button onClick={()=>{dispatch({type: 'decrement', payload:''})}}>Decrement</button>
    </>
  )
}

export default Counter