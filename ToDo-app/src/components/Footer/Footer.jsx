import PropTypes from 'prop-types'
import { Button } from '../Button/Button'
import './Footer.css'
import { useTodo } from '../../hooks/useTodo'

export const Footer = () => {

  const { countAllTodos, countCompletedTodo, filterCompletedTodos} = useTodo()

  const handleCountCompleted = countCompletedTodo();

  return (
    <div
      className='footer-tasks'>
    <p>{handleCountCompleted} Completed Tasks of {countAllTodos}</p>
    <Button
      className="clear-all-button"
      text="Clear All Completed"
      onClick={filterCompletedTodos} />
    </div>
  )
}

/* Footer.propTypes = {
  todosCompleted: PropTypes.number.isRequired,
  allTodos: PropTypes.number.isRequired,
  completedTasks: PropTypes.func.isRequired
}
 */
export default Footer
