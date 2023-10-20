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
      <div className='w-full'>
        <div className='relative w-full bg-[#93B1A6] rounded-xl pt-8'>
          <div className='w-full max-h-[300px] justify-center mb-4 flex items-center'>
            <img src={service.getFilePreview(featuredImage)} alt={title} className='rounded-xl w-[80vh] h-[45vh]' />
          </div>
          <h2 className='text-2xl text-center font-bold text-[#183D3D] pb-14'>{title}</h2>
          <Link to={`/post/${$id}`}>
            <div className='absolute bottom-0 right-6 text-right text-[#183D3D] font-semibold w-fit pb-4 hover:text-blue-700 bg-[#93B1A6]'>Read more &#8594; </div>
          </Link>
        </div>
      </div>
    </Link>
  )
}

export default PostCard