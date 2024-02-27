import { useState } from "react"
import { Button } from "./Button/Button"
import { RickApiHandler } from "./RickApiHandler/RickApiHandler"

export const Body = () => {
const [count, setCount] = useState(0)

const handleClickCount = (value) => {
  if(value === "increment" && count < 19){ /* the 19 its because this is the page 1 of the api and have only 20 characters */ 
    setCount(count+1)
  }else if(value === "decrease" && count > 0){
    setCount(count-1)
  }else if(value==="reset" || count === 19){
    alert('You reset the counter or Reached the limit')
    setCount(0)
  }
}
  return (
    <main>
      <RickApiHandler count={count} />
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
