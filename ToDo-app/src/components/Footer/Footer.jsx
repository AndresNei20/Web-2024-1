import { Button } from '../Button/Button'
import './Footer.css'

export const Footer = () => {
  return (
    <div className='footer-tasks'>
    <p>{/* {completed} */} Completed Tasks of {/* {total} */}</p>
    <Button text="clear all completed"></Button>
    </div>
  )
}
