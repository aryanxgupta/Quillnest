import BlogPostList from '@/components/BlogPostList'
import HomeSkeleton from '@/components/HomeSkeleton'
import { prisma } from '@/lib/db'
import React from 'react'
import { Suspense } from 'react'

const page = async() => {
  const fetchAllPosts = async()=>{
    const posts = await prisma.post.findMany({
      orderBy: {
        createdAt: 'desc'
      }, 
      include: {
        author: true
      }
    })
    return posts 
  }

  const PostList = async()=>{
    const posts = await fetchAllPosts()
    return <BlogPostList posts={posts} />
  }

  return (
    <main className='py-10 px-8 md:px-16'>
      <div className='mb-8 border-b-[1px] border-b-zinc-300 pb-2'>
        <h1 className='text-3xl font-ubuntu font-bold'>Latest Posts</h1>
        <p className='text-sm font-ubuntu text-zinc-700'>Explore the latest articles and insights</p>
      </div>
      <Suspense fallback={<HomeSkeleton />}>
        <PostList />
      </Suspense>
    </main>
  )
}

export default page