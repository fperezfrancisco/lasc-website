import React from 'react'

const StaffCard = ({image, name, position}) => {
  return (
    <div className="w-full h-full px-4 flex flex-col gap-4">
        <div className="w-[250px] h-[300px] aspect-video rounded-[8px] bg-neutral-200 overflow-hidden">
            <img src={image} className="w-full object-fit" />
        </div>
        <div className="flex flex-col items-start w-full">
            <h2 className="text-lg lg:text-xl font-extrabold uppercase text-text">{name}</h2>
            <p className="w-full">{position}</p>
        </div>
    </div>
  )
}

export default StaffCard