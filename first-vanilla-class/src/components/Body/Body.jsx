import { MoviesCards } from './MoviesCards/MoviesCards'
import { LargeMovieCards } from './LargeMovieCards/LargeMovieCards'
import { Slider } from './Slider/Slider'
import { LabelTitle } from './LabelTitle/LabelTitle'
import { moviesCards } from '../../data/movies'
import { moviesVerticalCards } from '../../data/moviesVertical'
import { dramaMovies } from '../../data/dramaMovies'
import { crimeMovies } from '../../data/crimeMovies'
import { fantasyMovies } from '../../data/fantasyMovies'
import { slideImages } from '../../data/slideImages'

const moviesFantasy = fantasyMovies
const moviesCrime = crimeMovies
const moviesDrama = dramaMovies
const moviesCard = moviesCards
const movieVerticalCard = moviesVerticalCards
const slides = slideImages

export const Body = () => {
  return (
    <main>
      <Slider items={slides} />

      <LabelTitle text='Recommended movies' />
      <MoviesCards movies={moviesCard} />

      <LabelTitle text='Amazon originals' showText='true' />
      <LargeMovieCards movies={movieVerticalCard} />

      <h4 className='yellow-titles'>Popular movies</h4>
      <MoviesCards movies={moviesCrime} showText />

      <LabelTitle text='Drama TV' />
      <MoviesCards movies={moviesDrama} />

      <LabelTitle text='Fantasy movies' />
      <MoviesCards movies={moviesFantasy} />

      <LabelTitle text='Crime movies' />
      <MoviesCards movies={moviesCrime} />
    </main>
  )
}
