import { Button } from '../Button/Button'
import { Info } from '../Info/Info'
import './Footer.css'

export const Footer = () => {
  return (
    <div className='footer-tasks'>
    <Info></Info>
    <Button text="clear all completed"></Button>
    </div>
  )
}
