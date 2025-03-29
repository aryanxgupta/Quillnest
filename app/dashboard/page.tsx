"use server"
import BlogPostList from '@/components/BlogPostList'
import DashboardSkeleton from '@/components/DashboardSkeleton'
import { Button } from '@/components/ui/button'
import { prisma } from '@/lib/db'
import { auth } from '@clerk/nextjs/server'
import { PlusIcon } from 'lucide-react'
import Link from 'next/link'
import { redirect } from 'next/navigation'
import React, { Suspense } from 'react'

const Page = async() => {
    const { userId } = await auth()
    if(!userId){
        redirect('/')
    }
    const fetchUserPosts = async ()=>{
        const posts = await prisma.post.findMany({
            where: {
                authorId: userId
            }, 
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
        const posts = await fetchUserPosts()
        return <BlogPostList posts={posts} userPosts={true} />
    }

    return (
        <div className='py-10 px-8 md:px-16'>
        <div className='mb-8 border-b-[1px] border-b-zinc-300 pb-2 flex items-center justify-between'>
            <h1 className='text-3xl font-ubuntu font-bold'>My posts</h1>
            <Link href={'/create'}>
                <Button className='font-ubuntu font-bold sm:text-md flex items-center justify-center gap-2'>
                    <PlusIcon className='h-3 w-3' />
                    <h1>New Post</h1>
                </Button>
            </Link>
        </div>
        <Suspense fallback={<DashboardSkeleton />}>
            <PostList />        
        </Suspense>
        </div>
    )
}

export default Page