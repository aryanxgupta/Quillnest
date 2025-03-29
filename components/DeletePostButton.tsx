"use client"
import React from 'react'
import {
    AlertDialog,
    AlertDialogAction,
    AlertDialogCancel,
    AlertDialogContent,
    AlertDialogDescription,
    AlertDialogFooter,
    AlertDialogHeader,
    AlertDialogTitle,
    AlertDialogTrigger,
} from "@/components/ui/alert-dialog"
import { Trash2 } from 'lucide-react'
import { deletePost } from '@/lib/actions'
import { redirect } from 'next/navigation'
import { toast } from 'sonner'
  
const DeletePostButton = ({ id }: { id: string }) => {
    const handleDiscard = async ()=>{
        const response = await deletePost(id)
        if(!response.success){
            return
        }
        redirect('/dashboard')
        toast("Post deleted successfully")
    }
  return (
    <div>
        <AlertDialog>
        <AlertDialogTrigger className='flex items-center justify-between gap-2 bg-red-500 p-2 text-sm rounded-lg text-white '>
            <Trash2 className='h-3 w-3'/> Discard
        </AlertDialogTrigger>
        <AlertDialogContent className='border-none'>
            <AlertDialogHeader>
            <AlertDialogTitle>Are you absolutely sure?</AlertDialogTitle>
            <AlertDialogDescription>
                This action cannot be undone. This will permanently delete your post.
            </AlertDialogDescription>
            </AlertDialogHeader>
            <AlertDialogFooter>
            <AlertDialogCancel>Cancel</AlertDialogCancel>
            <AlertDialogAction onClick={handleDiscard}>Discard</AlertDialogAction>
            </AlertDialogFooter>
        </AlertDialogContent>
        </AlertDialog>
    </div>
  )
}

export default DeletePostButton