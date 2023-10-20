import React, { useEffect, useState } from 'react'
import service from '../appwrite/config'
import { Container, PostCard } from '../components'
import { useSelector } from "react-redux";
function Allpost() {

  const [posts, setPosts] = useState([]);

  const userData = useSelector((state) => state.auth.userData);

  useEffect(() => {
    if (userData) service.getPosts(userData.$id).then((posts) => {
      if (posts) {
        setPosts(posts.documents)
      }
    })
  }, [])

  return (
    <div className='w-full py-8'>
      <Container>
        <div className='grid grid-cols-2'>
          {posts.map((post) => (
            <div key={post.$id} className='p-4'>
              <PostCard {...post} />
            </div>
          ))}
        </div>
      </Container>
    </div>
  )
}

export default Allpost