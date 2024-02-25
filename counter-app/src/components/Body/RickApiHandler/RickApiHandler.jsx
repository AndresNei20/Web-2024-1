import PropTypes from "prop-types";
import { useEffect, useState } from "react";

export const RickApiHandler = ({ count }) => {
  const [currentCharacter, setCurrentCharacter] = useState(null);
  const [characterData, setCharacterData] = useState([]);
  const [errors, setErrors] = useState("");
  console.log(characterData);

  const getRickData = async () => {
    try {
      const req = await fetch(`https://rickandmortyapi.com/api/character`);
      const data = await req.json();
      setCharacterData(data.results);
      setCurrentCharacter(data.results[count]);
      console.log(data);
    } catch (error) {
      console.log(error.message);
      setErrors(error.message);
    }
  };

  useEffect(() => {
    getRickData();
  }, [count]);

  if (errors !== "") {
    return <>{errors}</>;
  }
  return (
    <>
      {currentCharacter && (
        <section key={currentCharacter.id}>
          <img src={currentCharacter.image} />
          <h3>{currentCharacter.name}</h3>
          <h4>{currentCharacter.status}</h4>
          <p>{currentCharacter.species}</p>
        </section>
      )}
    </>
  );
};

RickApiHandler.propTypes = {
  count: PropTypes.number.isRequired,
};
