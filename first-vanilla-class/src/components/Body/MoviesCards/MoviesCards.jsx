export const MoviesCards = ({ movies, showText = false }) => {
  return (
    <div className='movie-cards'>
      {movies.map(({ id, src, title }) => (
        <figure key={id}>
          <img
            className='cards'
            src={src}
            alt={title}
          />
          {showText && (
            <span className='text-span'>
              <img src='./src/assets/icons/yellow_shopping_bag.svg' alt='' />
              <p className='rent-text'>Rent or buy</p>
            </span>
          )}
        </figure>
      ))}
    </div>
  )
}
