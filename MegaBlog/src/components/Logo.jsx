import React from 'react'
import img1 from '../assets/1.png'

function Logo({width = '300px'}) {
  return (
    <div>
      <img width={width} src={img1}/>
    </div>
  )
}

export default Logo