import React from 'react'

const TeamCard = ({image, team, coach}) => {
  return (
    <div className="w-full max-w-[800px] sm:mx-auto h-full px-0 flex flex-col gap-4 hover:scale-105 transition-all duration-500">
      <div className="w-full h-[300px] aspect-video rounded-[8px] bg-neutral-200 overflow-hidden">
        <img src={image} className="w-full h-full object-cover" />
      </div>
      <div className="flex flex-col items-start w-full">
        <h2 className="text-lg lg:text-xl font-extrabold uppercase text-text">
          {team}
        </h2>
        <p className="w-full">{coach}</p>
      </div>
    </div>
  )
}

export default TeamCard