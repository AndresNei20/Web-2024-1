import React from 'react'
import { MoviesCards } from './MoviesCards/MoviesCards'
import { LargeMovieCards } from './LargeMovieCards/LargeMovieCards'
import { Slider } from './Slider/Slider'
import { LabelTitle } from './LabelTitle/LabelTitle'
import { movies_cards } from '../../data/movies'

const movie_card = movies_cards

export const Body = () => {
  return (
    <main>
      <Slider></Slider>
      <LabelTitle text="Recommended movies"></LabelTitle>
      <MoviesCards movies={movie_card} ></MoviesCards>
      <h4>Amazon originals</h4>
      <LargeMovieCards></LargeMovieCards>
      <h4 className='yellow_titles'>Popular movies</h4>
    </main>
  )
}
