import PropTypes from "prop-types";
import { useEffect, useState } from "react";
import { Card } from "../Card/Card";
import './RickApiHandler.css'

export const RickApiHandler = ({ count }) => {
  const [currentCharacter, setCurrentCharacter] = useState(null);
  const [characterData, setCharacterData] = useState([]);
  const [errors, setErrors] = useState("");

  const getRickData = async () => {
    try {
      const req = await fetch(`https://rickandmortyapi.com/api/character`);
      const data = await req.json();
      console.log(characterData);
      setCharacterData(data.results);
      setCurrentCharacter(data.results[count]);
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
    <div 
    className="card-container">
      {currentCharacter && (
        <Card character={currentCharacter}/>
      )}
    </div>
  );
};

RickApiHandler.propTypes = {
  count: PropTypes.number.isRequired,
};
