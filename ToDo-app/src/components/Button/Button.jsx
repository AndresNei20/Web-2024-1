import PropTypes from 'prop-types'
import './Button.css'

export const Button = (/* {text} */) => {
  return (
    <button type='submit'>{/* {text} */}</button>
  )
}

Button.proptypes = {
  text: PropTypes.string.isRequired
}
