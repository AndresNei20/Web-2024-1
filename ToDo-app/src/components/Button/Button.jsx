import PropTypes from 'prop-types'
import './Button.css'

export const Button = ({ text, onClick }) => {

  const handleOnClick = () => {
    console.log('You clicked')
    onClick()
  }

  return (
    <button
      className='button-style'
      type='submit'
      onClick={handleOnClick}
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
