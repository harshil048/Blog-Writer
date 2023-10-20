import React from 'react'
import { Container, PostForm } from '../components'

function Addpost() {
  return (
    <div className='py-8'>
      <Container>
        <h1 className='text-center mt-4 font-bold text-gray-300 text-5xl mb-14'>Add Your New Blog..</h1>
        <PostForm />
      </Container>
    </div>
  )
}

export default Addpost