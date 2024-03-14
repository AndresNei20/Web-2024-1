import PropTypes from 'prop-types'
import { Button } from '../Button/Button'
import './Footer.css'

export const Footer = ({todosCompleted, allTodos}) => {
  return (
    <div className='footer-tasks'>
    <p>{todosCompleted} Completed Tasks of {allTodos}</p>
    <Button text="clear all completed"></Button>
    </div>
  )
}

Footer.propTypes = {
  todosCompleted: PropTypes.number.isRequired, 
  allTodos: PropTypes.number.isRequired
}