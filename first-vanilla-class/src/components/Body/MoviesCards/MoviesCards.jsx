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
          <div className='title-overlay'>
            <h3 className='title'>{title}</h3>
          </div>
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
