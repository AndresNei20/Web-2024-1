import React from 'react'

const images = [
    {src:'https://i.ebayimg.com/images/g/J4AAAOSwSDJk-uKg/s-l1200.webp', title: 'The boys'},
    {src:'https://pbs.twimg.com/media/F_sczsLWkAAft0C?format=jpg&name=4096x4096', title: 'zorro'},
    {src:'https://preview.redd.it/new-poster-for-saltburn-v0-hin6xt72qrwb1.jpg?width=640&crop=smart&auto=webp&s=004ad6d52da353b32835bc9c288f1faacd6f4fee', title: 'saltburn'},
    {src:'https://www.tvtime.com/_next/image?url=https%3A%2F%2Fartworks.thetvdb.com%2Fbanners%2Fv4%2Fseries%2F368207%2Fposters%2F652a5ef981eab.jpg&w=640&q=75', title: 'invincible'},
    {src:'https://i.ebayimg.com/images/g/J4AAAOSwSDJk-uKg/s-l1200.webp', title: 'The boys'},
    {src:'https://pbs.twimg.com/media/F_sczsLWkAAft0C?format=jpg&name=4096x4096', title: 'zorro'},
    {src:'https://preview.redd.it/new-poster-for-saltburn-v0-hin6xt72qrwb1.jpg?width=640&crop=smart&auto=webp&s=004ad6d52da353b32835bc9c288f1faacd6f4fee', title: 'saltburn'},
    {src:'https://www.tvtime.com/_next/image?url=https%3A%2F%2Fartworks.thetvdb.com%2Fbanners%2Fv4%2Fseries%2F368207%2Fposters%2F652a5ef981eab.jpg&w=640&q=75', title: 'invincible'},
    
]

export const LargeMovieCards = () => {
  return (
    <div className='large_movie_cards'>
        {images.map((image, index) => (
            <img className='large_cards' key={index} src={image.src} alt={image.title} />
        ))}
    </div>
  )
}
