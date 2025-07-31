import { CaretRightOutlined } from '@ant-design/icons'
import React from 'react'

const Single = ({ singleTitle, albumTitle, isBottom }) => {

    const soundWaves = new Array(21).fill("");

    return (
        <div className="p-2 flex flex-row justify-between" style={{ borderBottom: isBottom ? "0px solid #e5e7eb " : "1px solid #e5e7eb " }}>

            <div className="flex flex-col">
                <h4 className="text-md">{singleTitle} <span className="text-gray-300 text-sm">de {albumTitle}</span></h4>
                <div className="flex flex-row items-center gap-2">
                    <div className="w-[20px] h-[20px] bg-violet-500 rounded-full text-white text-sm flex items-center justify-center">
                        <CaretRightOutlined />
                    </div>

                    <div className="flex flex-row gap-[1px]">
                        {soundWaves.map(() => {
                            return (<div className="w-[5px] h-[26px] bg-gray-200 rounded-lg"></div>)
                        })}
                    </div>

                    <div className="rounded-full p-1 px-2 border-1 border-gray-200 text-sm">
                        Reemplazar
                    </div>
                </div>
            </div>

            <button className="text-red-500">Eliminar</button>
        </div>
    )
}

export default Single