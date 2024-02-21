import { useState } from "react"
import { Button } from "./Button/Button"

export const Body = () => {
const [Count, setCount] = useState(0)

const handleClickCount = (value) => {
  if(value === "increment"){
    setCount(Count+1)
  }else if(value === "decrease" && Count > 0){
    setCount(Count-1)
  }else if(value==="reset"){
    setCount(0)
  }
}
  return (
    <main>
      <h1>Counter</h1>
      <h3>{Count}</h3>
      <Button 
        type="decrease"
        text="-"
        handleClickCount={handleClickCount}/>
      <Button 
        type="reset"
        text="Reset"
        handleClickCount={handleClickCount}/>
      <Button 
        type="increment"
        text="+"
        handleClickCount={handleClickCount}/>
    </main>
  )
}
