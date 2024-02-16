export const LargeMovieCards = ({ movies }) => {
  return (
    <div className='large_movie_cards'>
      {movies.map(({ id, src, title }) => (
        <img
          className='large_cards'
          key={id}
          src={src}
          alt={title}
        />
      ))}
    </div>
  )
}
