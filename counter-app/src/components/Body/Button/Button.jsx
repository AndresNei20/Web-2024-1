import PropTypes from "prop-types";
import './Button.css'

export const Button = ({ text, type, handleClickCount }) => {
  const handleClick = () => {
    handleClickCount(type);
  };

const btnClass = `btn-${type}`;

  return (
    <button
      className={btnClass}
      onClick={handleClick}
      type={type}
      id={`button-${type}`}
    >
      <span>
        {text}
      </span>
    </button>
  );
};
Button.propTypes = {
  text: PropTypes.string.isRequired,
  type: PropTypes.string.isRequired,
  handleClickCount: PropTypes.func.isRequired,
};
