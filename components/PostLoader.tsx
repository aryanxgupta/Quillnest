import { Loader2 } from 'lucide-react'
import React from 'react'

const PostLoader = () => {
  return (
    <div className='w-full h-screen flex items-center justify-center'>
        <div className='animate-spin'>
            <Loader2 className='h-10 w-10 bg-blue-400' />
        </div>
    </div>
  )
}

export default PostLoader