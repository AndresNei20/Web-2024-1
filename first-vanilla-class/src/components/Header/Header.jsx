import { useState } from "react";
import icon1 from '../../assets/icons/search.svg'
import { menu_items } from "../../data/menu_items"; 
import { Nav } from "./nav";

console.log(menu_items  )

export const Header = () => {

  const [showMenu, setShowMenu] = useState(false)

  return (
    <header >
      <div className="navbar">
        <button className={`menu_btn ${showMenu ? 'menu_btn_active' : ''}`} 
                onClick={() => {setShowMenu(!showMenu)}}>
          Menu
        </button>
        <Nav items={menu_items} showMenu={showMenu}/> 
        <a className="title" href="">
          <strong>prime video</strong>
        </a>

        <a href="">
          <img
            width="30px"
            height="30px"
            src= {icon1}
            alt="search--v1"
          />
        </a>

        <a href="">
          <img
            width="30px"
            height="30px"
            src="https://m.media-amazon.com/images/G/02/CerberusPrimeVideo-FN38FSBD/adult-1.png"
            alt="search--v1"
          />
        </a>
      </div>
    </header>
  );
};
