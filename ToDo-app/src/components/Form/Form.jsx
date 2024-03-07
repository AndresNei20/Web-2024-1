import PropTypes from 'prop-types'
import { useState } from 'react'  
import './Form.css'

export const Form = ({addTodo}) => {
  const [inputValue, setInputValue] = useState('');

  const handleInputChange = (event) => {
    setInputValue(event.target.value) 
  }

  const handleAddTodo = () => {
    if(inputValue !== ''){
      const newTodo = {text: inputValue}
      addTodo(newTodo)
      setInputValue('')
    }
  }

  const handleKeyDown = (event) => {
    if (event.key === 'Enter') {
      handleAddTodo();
    }
  }

  return (
    <div>
        <input 
          type="text"
          placeholder='Add ToDo' 
          value={inputValue}
          onChange={handleInputChange}
          onKeyDown={handleKeyDown}
          className="input-task">
          
        </input>

        <div className='button-div'>
        <button type="submit" className="btn btn--purple"
        onClick={handleAddTodo}>
	<span className="btn__txt">Add Tasks</span>
	<i class="btn__bg" aria-hidden="true"></i>
	<i class="btn__bg" aria-hidden="true"></i>
	<i class="btn__bg" aria-hidden="true"></i>
	<i class="btn__bg" aria-hidden="true"></i>
</button>
</div>

    </div>
    
  )
}

Form.propTypes = {
  addTodo: PropTypes.func.isRequired
}
