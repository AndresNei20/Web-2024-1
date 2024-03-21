import PropTypes from 'prop-types'
import './Button.css'

export const Button = ({ text, onClick }) => {
  return (
    <button
      className='button-style'
      type='submit'
      onClick={onClick}
      >
      { text }
      </button>
  )
}
/* 
Button.propTypes = {
  text: PropTypes.string.isRequired,
  onClick: PropTypes.number.isRequired
} */
