import { useState } from 'react'
import './App.css'

function App() {
  const [color, setColor] = useState('')

  return (
    <div className='traffic-lights' style={{backgroundColor: color}}>
      <p>hello</p>
      <section className='red-light'
                onMouseEnter={()=>setColor('#cc3232')}
                onMouseLeave={()=>setColor('')}>
        <p>1</p>
      </section>
      <section className='yellow-light'
                      onMouseEnter={()=>setColor('#e7b416')}
                      onMouseLeave={()=>setColor('')}>
      <p>2</p>
      </section>
      <section className='green-light'
                      onMouseEnter={()=>setColor('#2dc937')}
                      onMouseLeave={()=>setColor('')}>
      <p>3</p>
      </section>
    </div>
  )
}

export default App
