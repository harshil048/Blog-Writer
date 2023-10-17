import React, { useEffect, useState } from 'react'
import service from '../appwrite/config';
import { Button, Container, PostCard } from '../components'
import { Link } from 'react-router-dom';

function Home() {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    service.getPosts().then((post) => {
      if (post) {
        setPosts(post.documents)
      }
    })
  }, [])

  if (posts.length === 0) {
    return (
      <div className="w-full text-center">
        
          <div class="relative">

            <img src="https://images.pexels.com/photos/326311/pexels-photo-326311.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt="Your Image" class="w-full h-[100%]  object-cover relative z-0" />


            <div class="w-full absolute left-1/2 transform -translate-x-1/2 top-1/2 -translate-y-1/2 text-center text-white z-10">
              <h2 class="text-7xl font-semibold font-dM-serif-display my-6 drop-shadow-2xl">Read, Explore, Gain Knowledge</h2>
              <h2 class="text-7xl font-semibold font-dM-serif-display my-6">Write Your Next Blog...</h2>
              <Link
                to="/login"
                className="font-bold text-primary transition-all duration-200 hover:underline"
              >
                <Button className='my-6 mx-4 w-[10%] rounded-3xl  hover:bg-blue-100  hover:text-black shadow-xl'>Login</Button>
              </Link>
              <Link
                to="/signup"
                className="font-bold text-primary transition-all duration-200 hover:underline"
              >
                <Button className='my-6 mx-4 w-[10%] rounded-3xl  hover:bg-blue-100  hover:text-black'>Sign Up</Button>
              </Link>
            </div>
          </div>

        
      </div>
    )
  }
  return (
    <div className='w-full py-8'>
      <Container>
        <div className='flex flex-wrap'>
          {posts.map((post) => (
            <div key={post.$id} className='p-2 w-1/4'>
              <PostCard {...post} />
            </div>
          ))}
        </div>
      </Container>
    </div>
  )
}

export default Home