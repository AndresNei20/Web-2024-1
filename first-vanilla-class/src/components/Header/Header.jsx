import React from "react";
import icon1 from '../../assets/icons/search.svg'
import { menu_items } from "../../data/menu_items";


console.log(menu_items  )

export const Header = () => {
  return (
    <header >
      <div className="navbar">
        <button className="menu_btn">
          Menu
        </button>

        <nav>
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
        </nav>

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
