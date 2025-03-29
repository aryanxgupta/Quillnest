"use client"
import DiscardButton from '@/components/DiscardButton'
import EditPostSkeleton from '@/components/EditPostSkeleton'
import Tiptap from '@/components/TipTap'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { craetePosts } from '@/lib/actions'
import { useAuth } from '@clerk/nextjs'
import { Loader2 } from 'lucide-react'
import { useRouter } from 'next/navigation'
import React, { FormEvent, useState } from 'react'
import { toast } from 'sonner'
import { useCompletion } from "@ai-sdk/react"
const Page = () => {
    const [title, setTitle] = useState<string>("The future of Artificial Intelligence in Everyday life.")
    const [content, setContent] = useState<string>("<h3>Welcome to <strong>QuillNest</strong></h3>")
    const [isSubmitting, setIsSubmitting] = useState<boolean>(false)
    const router = useRouter()
    const { userId, isLoaded } = useAuth() 

    const { completion, complete, isLoading } = useCompletion({
        api: '/api/generate'
    })
    const handleGenerate = async()=>{
        if(!title || title === "Sample Title"){
            toast("Add a topic in title for AI to help")
            return
        }
        await complete(title)
    }

    const handleSubmit = async(e: FormEvent)=>{
        e.preventDefault();
        console.log(content)
        try {
            setIsSubmitting(true)
            if(!userId){
                throw new Error("User must be signed in")
            }
            const response = await craetePosts({title, content})
            if(!response.success){
                throw new Error(`${response.message}`)
            }
            toast("Post created successfully")
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
    const handleDiscard = ()=>{
        setTitle("Sample Title")
        setContent("<h3>Welcome to <strong>QuillNest</strong></h3>")
        router.push('/dashboard')
        toast("Post removed")
    }
    if(!isLoaded){
        return(
            <EditPostSkeleton type='create' />
        )
    }
    return (
        <div className='py-10 px-8 md:px-16'>
        <div className='mb-8 border-b-[1px] border-b-zinc-300 pb-2 flex items-center justify-between'>
            <h1 className='text-3xl font-ubuntu font-bold'>Create new post</h1>
        </div>
        <form className='sm:w-[55%]' onSubmit={handleSubmit}>
            <Input 
                className='font-ubuntu font-semibold mb-10 shadow-lg md:h-12'
                placeholder='Add a topic in title for AI to help'
                required
                minLength={10}
                value={title}
                onChange={(e) => setTitle(e.target.value)}
            />
            {completion.length>0 && 
                <div className='p-1 mb-10 bg-linear-to-br from-purple-700 to-pink-400 rounded-xl shadow-xl'>
                    <div className='p-2 bg-white ring-2 font-ubuntu ring-zinc-100 shadow-xl rounded-lg mb-1 flex-col'>
                        <Tiptap content={completion} editable={false} />
                    </div>
                </div>
            }
            <Tiptap content={content} setContent={setContent}/>
            <div className='flex items-center justify-between w-full mt-5'>
                <DiscardButton handleDiscard={handleDiscard} />
                <div className='flex items-center justify-center gap-2'>
                    <Button type='button' className='bg-linear-to-r from-purple-700 to-pink-400 ' onClick={handleGenerate} disabled={isLoading}>
                        {isLoading? 
                        <div className='flex items-center justify-center gap-4'>
                            <div className='animate-spin'><Loader2 /></div>
                            <div>Generating</div>
                        </div> 
                        : 
                        "AI Generate" }
                    </Button>
                    <Button type='submit' className='w-fit' disabled={isSubmitting}>
                        {isSubmitting? 
                        <div className='flex items-center justify-center gap-4'>
                            <div className='animate-spin'><Loader2 /></div>
                            <div>Creating</div>
                        </div> 
                        : 
                        "Create" }
                    </Button>
                </div>
            </div>
        </form>
        </div>
    )
}

export default Page