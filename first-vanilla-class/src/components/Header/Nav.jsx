import { useEffect, useState } from 'react'

export const Nav = ({ items, showMenu }) => {
  const [isDesktop, setIsDesktop] = useState(window.innerWidth > 770)

  useEffect(() => {
    const handleResize = () => {
      setIsDesktop(window.innerWidth > 770)
    }
    window.addEventListener('resize', handleResize)

    return () => {
      window.removeEventListener('resize', handleResize)
    }
  }, [])

  return (
    <nav style={{ display: (showMenu || isDesktop) ? 'block' : 'none' }}>
      <ul className='menu_list'>
        {items.map(({ id, text, icon }) => (
          <li key={id}>
            <img src={icon} alt={text} /> {text}
          </li>
        ))}
      </ul>
    </nav>
  )
}

export default Nav
