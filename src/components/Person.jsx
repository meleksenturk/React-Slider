import React from 'react'
import '../css/personStyle.css'
export const Person = ({ image, name, title, quote }) => {
  return (
    <div className='personInfoDiv'>

      <div className='personImageDiv'>
        <img src={image} width={100} height={100}></img>
      </div>
      <div className='personInfo'>
        <h4>{name}</h4>
        <span>{title}</span>
        <div className='info'>
          <span >{quote}</span>
        </div>
      </div>

    </div>
  )
}
