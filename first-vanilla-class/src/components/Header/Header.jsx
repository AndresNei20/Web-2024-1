import { useState } from 'react'
import icon1 from '../../assets/icons/search.svg'
import { menuItems } from '../../data/menuItems'
import { Nav } from './nav'

export const Header = () => {
  const [showMenu, setShowMenu] = useState(false)

  return (
    <header>
      <div className='navbar'>
        <button
          className={`menu_btn ${showMenu ? 'menu_btn_active' : ''}`}
          onClick={() => {
            setShowMenu(!showMenu)
          }}
        >
          Menu
        </button>

        <Nav items={menuItems} showMenu={showMenu} />

        <a className='title'>
          <strong>prime video</strong>
        </a>

        <a
          className='search'
          onClick={() => {
            console.log('Its a layout, that`s all!')
          }}
          href=''
        >
          <img width='30px' height='30px' src={icon1} alt='search--v1' />
        </a>

        <a
          onClick={() => {
            console.log('Its a layout, that`s all!')
          }}
          href=''
        >
          <img
            width='30px'
            height='30px'
            src='https://m.media-amazon.com/images/G/02/CerberusPrimeVideo-FN38FSBD/adult-1.png'
            alt='search--v1'
          />
        </a>
      </div>
    </header>
  )
}
