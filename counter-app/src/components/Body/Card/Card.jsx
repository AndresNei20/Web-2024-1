import PropTypes from "prop-types";
import './Card.css'

export const Card = ({ character }) => {
  return (
    <section className="card">
      <img src={character.image} />
      <h3>{character.name}</h3>
      <h4>
        {character.status} and its {character.species}
      </h4>
    </section>
  );
};

Card.propTypes = {
  character: PropTypes.shape({
    image: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    status: PropTypes.string.isRequired,
    species: PropTypes.string.isRequired,
  }).isRequired
};
