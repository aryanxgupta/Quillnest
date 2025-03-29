"use client"
import { getPostById, GetPostResponse, updatePost } from '@/lib/actions'
import React, { FormEvent, use, useEffect, useState } from 'react'
import { useAuth } from '@clerk/nextjs'
import { useRouter } from 'next/navigation'
import { toast } from 'sonner'
import { Input } from '@/components/ui/input'
import Tiptap from '@/components/TipTap'
import { Button } from '@/components/ui/button'
import { Loader2 } from 'lucide-react'
import EditPostSkeleton from '@/components/EditPostSkeleton'


export default function Page({ params }: { params: Promise<{ id: string }>}){
    const { id } = use(params)
    const { userId, isSignedIn, isLoaded } = useAuth()
    const [title, setTitle] = useState<string>("Sample Title")
    const [content, setContent] = useState<string>("<h3>Welcome to <strong>QuillNest</strong></h3>")
    const [isSubmitting, setIsSubmitting] = useState<boolean>(false)
    const [loading, setLoading] = useState<boolean>(true)
    const router = useRouter()

    useEffect(() => {
        const fetchPost = async()=>{
            if(!isSignedIn){
                return 
            }
            try {
                const post: GetPostResponse = await getPostById(id)
                if(!post.success){
                    throw new Error(`${post.message}`)
                }
                if(post.success && post.message.authorId !== userId){
                    throw new Error("Unauthorized")
                }
                setTitle(post.message.title)
                setContent(post.message.content)
            } catch (error) {
                console.error("Error while fetching post", error)
            } finally {
                setLoading(false)
            }
        }

        fetchPost()
    }, [id, isSignedIn, userId])

    const handleSubmit = async(e: FormEvent)=>{
        e.preventDefault();
        try {
            setIsSubmitting(true)
            if(!userId){
                throw new Error("User must be signed in")
            }
            const response = await updatePost({postId: id, title, content})
            if(!response.success){
                throw new Error(`${response.message}`)
            }
            toast("Post updated successfully")
            router.push('/dashboard')
        } catch (error) {
            console.error("Error creating post", error)
            toast("Something went wrong", {
                description: error instanceof Error? error.message : "Please try again after some time",
            })
        } finally {
            setIsSubmitting(false)
        }
    }

    if(loading || !isLoaded){
        return(
            <div>
                <EditPostSkeleton type='edit' />
            </div>
        )
    }

    return (
        <div className='py-10 px-8 md:px-16'>
        <div className='mb-8 border-b-[1px] border-b-zinc-300 pb-2 flex items-center justify-between'>
            <h1 className='text-3xl font-ubuntu font-bold'>Edit post</h1>
        </div>
        <form className='sm:w-[55%]' onSubmit={handleSubmit}>
            <Input 
                className='font-ubuntu font-semibold mb-10 shadow-lg md:h-12'
                placeholder='Title'
                required
                minLength={10}
                value={title}
                onChange={(e) => setTitle(e.target.value)}
            />
            <Tiptap content={content} setContent={setContent}/>
            <div className='flex items-center justify-between w-full mt-5'>
                <Button type='submit' className='w-fit' disabled={isSubmitting}>
                    {isSubmitting? 
                    <div className='flex items-center justify-center gap-4'>
                        <div className='animate-spin'><Loader2 /></div>
                        <div>Updating</div>
                    </div> 
                    : 
                    "Update" }
                </Button>
            </div>
        </form>
        </div>
    )
}
