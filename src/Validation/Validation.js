import React from 'react'

const validation = ({textLength}) =>{
  const valid = textLength < 5 ? 'Text too short' : 'Text long enough'
  return(
    <p>{valid}</p>
  )
}
  

export default validation