export const Slider = ({ items }) => {
  return (
    <div className='slider'>
      <figure className='slide_figure'>
        {
            items.map(({ id, src }) => (
              <div className='slide' key={id}>
                <img src={src} />
              </div>
            ))
        }
      </figure>
    </div>
  )
}
