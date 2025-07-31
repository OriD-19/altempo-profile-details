import React from 'react'

const UploadImage = () => {
  return (
    <div className="flex flex-row gap-2 items-center">
        <div className="rounded-xl">
            <img className="rounded-xl aspect-square max-w-[100px]" src="./pfp.webp" alt="Profile Picture" />
        </div>
        <div className="flex flex-col">
            <button className="border-1 mb-2 border-gray-400 rounded-full p-2 cursor-pointer">Actualiza foto</button>
            <p className="text-gray-400 text-sm">Formato JPG, PNG, Max 5MB</p>
        </div>
    </div>
  )
}

export default UploadImage