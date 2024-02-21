import PropTypes from 'prop-types';

export const Button = ({text, type, handleClickCount}) => {
    const handleClick = ()=>{
        handleClickCount(type)
    }
  return (
    <button 
        onClick={handleClick} 
        type={type} 
        className="btn" 
        id={`button-${type}`}>{text}</button>
  )
}
Button.propTypes = {
    text: PropTypes.string.isRequired,
    type:PropTypes.string.isRequired,
    handleClickCount: PropTypes.func.isRequired,
}
