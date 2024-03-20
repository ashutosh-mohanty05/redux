import React from 'react'
import { useSelector, useDispatch } from 'react-redux'
const Navbar = () => {
    const count = useSelector((state) => state.counter.value)
  return (
    <div>This is a {count}</div>
  )
}

export default Navbar