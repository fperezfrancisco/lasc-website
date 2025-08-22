import React from 'react'

const TeamsSkeleton = () => {
  return (
    <div className="w-full max-w-[800px] sm:mx-auto h-full px-0 flex flex-col justify-center gap-4 animate-pulse mb-6">
      <div className="w-full h-auto aspect-video rounded-[8px] bg-neutral-200 overflow-hidden"></div>
      <div className="flex flex-col gap-4 items-start w-full">
        <p className="w-2/5 h-8 bg-neutral-200 rounded-[6px]"></p>
        <h2 className="w-1/5 h-6 bg-neutral-200 rounded-[6px]"></h2>
      </div>
    </div>
  )
}

export default TeamsSkeleton