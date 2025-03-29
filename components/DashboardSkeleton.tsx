import React from 'react'

const DashboardSkeleton = () => {
  return (
      <div className='grid md:grid-cols-3 grid-cols-1 gap-2'>
      <CardSkeleton />
      <CardSkeleton />
      <CardSkeleton />
      <CardSkeleton />
      <CardSkeleton />
      <CardSkeleton />
      </div>
  )
}

export const CardSkeleton = ()=>{
    return(
        <div className='min-h-72 min-w-10 bg-zinc-400 rounded-2xl animate-pulse transition-all duration-75'></div>
    )
}

export default DashboardSkeleton