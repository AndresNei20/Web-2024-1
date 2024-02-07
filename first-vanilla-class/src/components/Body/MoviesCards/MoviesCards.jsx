import React from 'react'


export const MoviesCards = ({movies}) => {
  return (
    <div className='movie_cards'>
        {movies.map(({id, src, title}) => (
            <img className='cards' 
                 key={id} 
                 src={src} 
                 alt={title}/>
        ))}
    </div>
  )
}
