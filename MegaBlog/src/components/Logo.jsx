import React from 'react'
import img1 from '../assets/1.png'

function Logo({width = '100px',className = ""}) {
  return (
    <div>
      <img width={width} src={img1} className={`${className}`}/>
    </div>
  )
}

export default Logo