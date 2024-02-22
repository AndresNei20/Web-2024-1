export const LargeMovieCards = ({ movies }) => {
  return (
    <div className='large-movie-cards'>
      {movies.map(({ id, src, title }) => (
        <img
          className='large-cards'
          key={id}
          src={src}
          alt={title}
        />
      ))}
    </div>
  )
}
