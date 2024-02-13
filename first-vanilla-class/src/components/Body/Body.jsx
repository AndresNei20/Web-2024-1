import { MoviesCards } from './MoviesCards/MoviesCards'
import { LargeMovieCards } from './LargeMovieCards/LargeMovieCards'
import { Slider } from './Slider/Slider'
import { LabelTitle } from './LabelTitle/LabelTitle'
import { movies_cards } from '../../data/movies'
import { movies_vertical_cards } from '../../data/movies_vertical'
import { drama_movies } from '../../data/drama_movies'
import { crime_movies } from '../../data/crime_movies'
import { fantasy_movies } from '../../data/fantasy_movies'

const movies_fantasy = fantasy_movies
const movies_crime = crime_movies
const movies_drama = drama_movies
const movie_card = movies_cards
const movie_vertical_card = movies_vertical_cards

export const Body = () => {
  return (
    <main>
      <Slider></Slider>

      <LabelTitle text="Recommended movies"></LabelTitle>
      <MoviesCards movies={movie_card}></MoviesCards>

      <LabelTitle text="Amazon originals" showText='true' ></LabelTitle>
      <LargeMovieCards movies={movie_vertical_card}></LargeMovieCards>

      <h4 className='yellow_titles'>Popular movies</h4>
      <MoviesCards movies={movies_crime} showText={true}></MoviesCards>

      <LabelTitle text="Drama TV"></LabelTitle>
      <MoviesCards movies={movies_drama} ></MoviesCards>

      <LabelTitle text="Fantasy movies"></LabelTitle>
      <MoviesCards movies={movies_fantasy} ></MoviesCards>

      <LabelTitle text="Crime movies"></LabelTitle>
      <MoviesCards movies={movies_crime} ></MoviesCards>
    </main>
  )
}
