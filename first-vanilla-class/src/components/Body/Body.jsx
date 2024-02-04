import React from 'react'
import { MoviesCards } from './MoviesCards/MoviesCards'
import { LargeMovieCards } from './LargeMovieCards/LargeMovieCards'

export const Body = () => {
  return (
    <main>
      <h4>Recommended movies</h4>
      <MoviesCards></MoviesCards>
      <h4>Amazon originals</h4>
      <LargeMovieCards></LargeMovieCards>
      <h4 className='yellow_titles'>Popular movies</h4>
    </main>
  )
}
