import React from 'react'

const images = [
    {src:'https://img1.hotstarext.com/image/upload/f_auto,t_web_m_1x/sources/r1/cms/prod/6620/816620-h', title: 'himym'},
    {src:'https://thecosmiccircus.com/wp-content/uploads/2024/01/Untitled-design-60.jpg', title: 'hazbin'},
    {src:'https://ermesverona.it/wp-content/uploads/2023/03/The-Whale-copertina.jpeg', title: 'whale'},
    {src:'https://m.media-amazon.com/images/S/pv-target-images/b55b8807ca03e0c2e01aac6710aa1ecf0c2039d973a61835907b7382301eb323.jpg', title: 'betty'},
    {src:'https://img1.hotstarext.com/image/upload/f_auto,t_web_m_1x/sources/r1/cms/prod/6620/816620-h', title: 'himym'},
    {src:'https://thecosmiccircus.com/wp-content/uploads/2024/01/Untitled-design-60.jpg', title: 'hazbin'},
    {src:'https://ermesverona.it/wp-content/uploads/2023/03/The-Whale-copertina.jpeg', title: 'whale'},
    {src:'https://m.media-amazon.com/images/S/pv-target-images/b55b8807ca03e0c2e01aac6710aa1ecf0c2039d973a61835907b7382301eb323.jpg', title: 'betty'},

]

export const MoviesCards = () => {
  return (
    <div className='movie_cards'>
        {images.map((image, index) => (
            <img className='cards' key={index} src={image.src} alt={image.title} />
        ))}
    </div>
  )
}
