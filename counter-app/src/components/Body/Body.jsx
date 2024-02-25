import { useState } from "react"
import { Button } from "./Button/Button"
import { RickApiHandler } from "./RickApiHandler/RickApiHandler"

export const Body = () => {
const [count, setCount] = useState(0)

const handleClickCount = (value) => {
  if(value === "increment"){
    setCount(count+1)
  }else if(value === "decrease" && count > 0){
    setCount(count-1)
  }else if(value==="reset"){
    setCount(0)
  }
}
  return (
    <main>
      <h1>Counter</h1>
      <RickApiHandler count={count} />
      <h3>{count}</h3>
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
