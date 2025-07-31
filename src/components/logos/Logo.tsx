import React from 'react'

// Simulation for a logo component
const Logo = ({ size }) => {
    return (
        <div className="min-w-[32px] min-h-[32px] bg-violet-300 rounded-full" style={{
            "minWidth": `${size}px`,
            "minHeight": `${size}px`
        }}></div>
    )
}

export default Logo