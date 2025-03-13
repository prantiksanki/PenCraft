import React, {useState, useEffect} from 'react'
import {Container , PostCard} from '../components'
import appwriteService from '../appwrite/config'

export default function AllPost() {
    const [posts , setPosts] = useState([]) 
    useEffect(() => {} , [])

    appwriteService.getPosts([])
    .then((posts) => {
        if(posts)
        {
            setPosts(posts.documents)
        }
    })
    .catch(error) ()
  return (
    <div className='py-8 w--full'>
      <Container>
        <div className='flex flex-wrap'>
        {posts.map((post) =>
        (
            <div key = {post.$id} className='w-1 p-2/4'>
                 <PostCard post = {post}/>
            </div>
        ))}
        </div>
      </Container>
    </div>
  )
}
