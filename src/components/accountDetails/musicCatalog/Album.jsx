import React from 'react'

const Album = ({ albumTitle, isBottom }) => {
    return (
        <div className="p-2 flex flex-row justify-between" style={{ borderBottom: isBottom ? "0px solid #e5e7eb " : "1px solid #e5e7eb " }}>
            <p>{albumTitle}</p> 
            <button className="text-red-500">Eliminar</button>
        </div>
    )
}

export default Album