import { CloseOutlined } from '@ant-design/icons'
import React from 'react'

const MusicTag = ({ tagName }) => {
  return (
    <div className="px-2 rounded-full flex flex-row w-fit gap-1 items-center border-1 border-gray-400">
        <p>{tagName}</p>
        <button className="bg-gray-300 w-[16px] h-[16px] rounded-full flex items-center justify-center text-white text-sm leading-none">
           <CloseOutlined style={{fontSize: "8px"}}/> 
        </button>
    </div>
  )
}

export default MusicTag