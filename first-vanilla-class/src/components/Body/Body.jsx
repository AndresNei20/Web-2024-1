import React from 'react'
import { MoviesCards } from './MoviesCards/MoviesCards'
import { LargeMovieCards } from './LargeMovieCards/LargeMovieCards'
import { Slider } from './Slider/Slider'

export const Body = () => {
  return (
    <main>
      <Slider></Slider>
      <h4>Recommended movies</h4>
      <MoviesCards></MoviesCards>
      <h4>Amazon originals</h4>
      <LargeMovieCards></LargeMovieCards>
      <h4 className='yellow_titles'>Popular movies</h4>
    </main>
  )
}
