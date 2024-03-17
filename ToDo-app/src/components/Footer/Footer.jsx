import PropTypes from 'prop-types'
import { Button } from '../Button/Button'
import './Footer.css'

export const Footer = ({ todosCompleted, allTodos, completedTasks }) => {
  return (
    <div
      className='footer-tasks'>
    <p>{todosCompleted} Completed Tasks of {allTodos}</p>
    <Button
      text="Clear All Completed"
      onClick={completedTasks} />
    </div>
  )
}

Footer.propTypes = {
  todosCompleted: PropTypes.number.isRequired,
  allTodos: PropTypes.number.isRequired,
  completedTasks: PropTypes.func.isRequired
}

export default Footer
