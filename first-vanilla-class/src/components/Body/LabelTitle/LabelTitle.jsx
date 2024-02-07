import React from 'react'

export const LabelTitle = ({text}) => {
  return (
    <span className='label_title'>
        <h4 className='prime_tag'>Prime</h4><h4>{text}</h4>
    </span>
  )
}
