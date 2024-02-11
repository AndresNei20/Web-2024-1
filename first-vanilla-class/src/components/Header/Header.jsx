import React, { useState } from "react";
import icon1 from '../../assets/icons/search.svg'
import { menu_items } from "../../data/menu_items"; 

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

        {showMenu && (<nav>
          <ul className="menu_list">
            {
              menu_items.map(({id, text, icon}) => {
                return(
                  <li key={id}>
                    <img src={icon} alt={text}/> {text}
                  </li>
                )
              })
            }
          </ul>
        </nav>)}

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
