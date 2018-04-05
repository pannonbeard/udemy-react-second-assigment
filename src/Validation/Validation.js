import React from 'react'

const validation = ({textLength}) =>{
  let valid = null
  if(textLength < 5){
    valid = 'Text too short'
  }else{
    valid = 'Text long enough'
  }
  return(
    <p>{valid}</p>
  )
}
  

export default validation