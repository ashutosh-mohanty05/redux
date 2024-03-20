import { useState } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import './App.css'
import Navbar from './component/Navbar'
import { decrement, increment, incrementByAmount, multiply } from './redux/counter/counterSlice'

function App() {
  
  const count = useSelector((state) => state.counter.value)
  const dispatch = useDispatch()

  return (
    <>
    <Navbar/>
      <div>
        <button onClick={() => dispatch(incrementByAmount(5))}>++</button>
        <button onClick={() => dispatch(decrement())}>-</button>
       count is {count}
       <button  onClick={() => dispatch(increment())}>+</button>
       <button onClick={() => dispatch(multiply())} >*</button>
      </div>
    </>
  )
}

export default App
