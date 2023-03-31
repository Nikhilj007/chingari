import React from 'react'
import './Floating.css'

const Floating = (props) => {
  return (
    <div className='floating'>
      <img src={props.image} alt="" />
      <span>{props.txt1} <br/> {props.txt2}</span>
    </div>
  )
}

export default Floating
