export const Nav = ({items, showMenu}) => {

    return (
    showMenu 
        ? (<nav>
                <ul className={`menu_list`}>
                {
                    items.map(({id, text, icon}) => {
                    return(
                        <li key={id}>
                        <img src={icon} alt={text}/> {text}
                        </li> 
                    )
                    })
                }
                </ul>
            </nav>)
      : null
  )
}
