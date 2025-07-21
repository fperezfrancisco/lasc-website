import React from 'react'
import { useState, useEffect } from 'react'

const PictureAndPara = ({title, subHeader,  text, image, imageFirst = true}) => {

    return (
        <div className="w-full px-4 lg:px-6 py-[48px] md:py-[64px] lg:py-[120px] flex flex-col-reverse lg:flex-row gap-4 md:gap-8 lg:gap-10 xl:gap-18 items-center">
            {imageFirst ? (
                <>
                <div className="w-full">
                    <div className="w-full h-full aspect-video rounded-[8px] bg-neutral-200 overflow-hidden">
                    <img src={image} className="w-full object-cover" />
                    </div>
                </div>
                <div className="flex flex-col items-start w-full lg:max-w-[800px] ">
                    <h3 className="text-md font-italic text-text">{subHeader}</h3>
                    <h2 className="text-2xl lg:text-3xl font-extrabold text-text">{title}</h2>
                    <p className="my-6 w-full lg:max-w-[600px]">{text}</p>
                </div>
                </>
            ) :  (
                <>
                <div className="flex flex-col items-start w-full lg:max-w-[800px] ">
                    <h3 className="text-md font-italic text-text">{subHeader}</h3>
                    <h2 className="text-2xl lg:text-3xl font-extrabold text-text">{title}</h2>
                    <p className="my-6 w-full lg:max-w-[600px]">{text}</p>
                </div>
                <div className="w-full">
                    <div className="w-full h-full aspect-video rounded-[8px] bg-neutral-200 overflow-hidden">
                    <img src={image} className="w-full object-cover" />
                    </div>
                </div>
                </>
            )}
        </div>
    )
}

export default PictureAndPara