import { useState } from 'react'

import Title from './components/Title'
import Display from './components/Display'
import Button from './components/Button'
import './App.css'

function App() {

  const [count, setCount] = useState(0);

  const decrement = () => {
    setCount((prevCount) => prevCount - 1);
  };

  const reset = () => {
    setCount(0)
  };

  const increment = () => {
    setCount((prevCount) => prevCount + 1)
  }

  return (
    <>
      <Title title="Counter"/>
      <Display count={count}/>
      <div className="btn-container">
        <Button name="decrement" text="Decrement" onClick={decrement}/>
        <Button name="reset" text="Reset" onClick={reset}/>
        <Button name="increment" text="Increment" onClick={increment}/>
      </div>
    </>
  )
}

export default App
