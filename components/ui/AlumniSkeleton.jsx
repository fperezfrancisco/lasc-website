import React from 'react'

const AlumniSkeleton = () => {
  return (
    <div className="w-full h-full flex flex-col items-center gap-4 animate-pulse">
        <div className="w-full aspect-square bg-neutral-200 rounded-[8px] overflow-hidden">
        </div>
        <div className="w-full px-2 flex flex-col items-center gap-2 text-center">
            <h2 className="w-1/3 h-6 bg-neutral-200 rounded-[6px]"></h2>
            <p className="w-1/2 h-5 bg-neutral-200 rounded-[6px]"></p>
        </div>
    </div>
  )
}

export default AlumniSkeleton