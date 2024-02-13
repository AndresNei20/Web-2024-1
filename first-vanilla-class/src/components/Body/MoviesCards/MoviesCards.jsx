export const MoviesCards = ({movies, showText = false}) => {
  return (
    <div className='movie_cards'>
        {movies.map(({id, src, title}) => (
          <figure key={id}>
            <img className='cards' 
                 /* key={id} */ 
                 src={src} 
                 alt={title}/>
                 {showText && (<span className='text_span'>
                                <img src="./src/assets/icons/yellow_shopping_bag.svg" alt="" />
                                <p className='rent_text'>Rent or buy</p>
                                </span>)
                  } 
          </figure>
        ))}
    </div>
  ) 
}
