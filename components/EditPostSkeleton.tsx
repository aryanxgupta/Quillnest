import React from 'react'

const EditPostSkeleton = ({type}: { type: string }) => {
  return (
    <div className='py-10 px-8 md:px-16'>
    <div className='mb-8 border-b-[1px] border-b-zinc-300 pb-2 flex items-center justify-between'>
        <h1 className='text-3xl font-ubuntu font-bold'>
            {type === "edit"? "Edit Post": "Create Post"}
        </h1>
    </div>
    <div className='sm:w-[55%]'>
        <div className='w-full min-h-16 rounded-lg bg-zinc-400 animate-pulse'></div>
        <div className='w-full rounded-lg mt-5 min-h-52 bg-zinc-400 animate-pulse'></div>
    </div>
    </div>
  )
}

export default EditPostSkeleton