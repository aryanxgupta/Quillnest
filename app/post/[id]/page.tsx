import Tiptap from '@/components/TipTap'
import { getPostById, GetPostResponse } from '@/lib/actions'
import { PostWithAuthor } from '@/lib/constats'
import { Dot } from 'lucide-react'
import { redirect } from 'next/navigation'
import React from 'react'

const page = async(props: { params: Promise<{ id: string }> }) => {
    const { id } = await props.params
    const response: GetPostResponse = await getPostById(id)
    if(!response.success){
        redirect('/')
    } 
    const post: PostWithAuthor = response.message
    return (
        <div className='py-10 px-8 md:px-16 font-ubuntu'>
            <div className='max-sm:text-2xl text-3xl font-bold'>
                {post.title}
            </div>
            <div className='flex items-center justify-start gap-1 font-light text-zinc-400 mt-2 max-sm:text-sm'>
                {post.author.firstName ? `${post.author.firstName} ${post.author.lastName ? post.author.lastName : ""}` : post.author.email.split('@')[0]}
                <Dot className='h-4 w-4 text-zinc-500' />
                {post.createdAt.toUTCString().split(' ').slice(0, 4).join(' ')}
            </div>
            <div className='mt-10'>
                <Tiptap content={post.content} editable={false}/>
            </div>
        </div>
    )
}

export default page