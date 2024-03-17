import PropTypes from 'prop-types'
import { useState } from 'react'
import './Form.css'

export const Form = ({ onSubmit }) => {
  const [inputValue, setInputValue] = useState('')

  const handleInputChange = (event) => {
    setInputValue(event.target.value)
  }

  const handleSubmit = (e) => {
    if (inputValue !== '') {
      e.preventDefault()
      onSubmit(inputValue)
      setInputValue('')
    } else {
      window.alert('Please enter your Task')
    }
  }

  const buttonClass = inputValue ? 'btn btn--purple' : 'btn-off'

  return (
  <form onSubmit={handleSubmit}>
   <div className='form-div'>
    <input
      type="text"
      placeholder='Add ToDo'
      value={inputValue}
      onChange={handleInputChange}
      className="input-task">
    </input>

    <div className='button-div'>
      <button
        type="submit"
        className={buttonClass}>
        <span className="btn__txt">
              Add Tasks
        </span>
        <i className="btn__bg" aria-hidden="true"></i>
        <i className="btn__bg" aria-hidden="true"></i>
        <i className="btn__bg" aria-hidden="true"></i>
        <i className="btn__bg" aria-hidden="true"></i>
      </button>
      </div>
    </div>

  </form>

  )
}

Form.propTypes = {
  onSubmit: PropTypes.func.isRequired
}
