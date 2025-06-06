import React from 'react'

const VideoTitle = ({title,overview}) => {
  return (
    <div className='w-screen aspect-video pt-80 px-10 absolute text-white bg-gradient-to-r from-black'>
      <h1 className='font-bold text-4xl'>{title}</h1>
      <p className='py-6 w-1/4'>{overview}</p>
      <div>
        <button className='bg-white text-black py-2 px-8  cursor-pointer text-lg rounded-md hover:bg-gray-300'>▶ Play</button>
        <button className='bg-gray-500 text-white cursor-pointer py-2 px-8 mx-2 text-lg rounded-md'>More Info</button>
      </div>
    </div>
  )
}

export default VideoTitle