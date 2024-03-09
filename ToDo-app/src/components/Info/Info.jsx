import './Info.css'

const completed = 10
const total = 13

export const Info = (/* {completed,total} */) => {
  return (
    <p>{completed} Completed Tasks of {total}</p>
  )
}
