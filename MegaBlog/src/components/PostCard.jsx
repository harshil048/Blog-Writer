import React from 'react'
import service from '../appwrite/config'
import {Link} from 'react-router-dom'

function PostCard({
  $id,
  title,
  featuredImage
}) {
  return (
    <Link to={`/post/${$id}`}>
      <div className='w-full bg-[#93B1A6] rounded-xl p-4'>
        <div className='w-full max-h-[300px] justify-center mb-4'>
          <img src={service.getFilePreview(featuredImage)} alt={title} className='rounded-xl w-[500px] h-[250px]' />
        </div>
        <h2 className='text-xl text-center font-bold text-[#183D3D]'>{title}</h2>
      </div>
    </Link>
  )
}

export default PostCard