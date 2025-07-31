import React from 'react'
import Logo from '../logos/Logo'

const SidebarListGroup = ({ groupTitle, optionsList, withLogos }) => {
    return (
        <div>
            <h3 className="text-gray-500 tracking-[0.15em] text-xs mb-2">
                {groupTitle.toUpperCase()}
            </h3>
            <div className="flex flex-col text-gray-500">
                {optionsList.map(option => (
                    <div className="flex flex-row items-center ml-2 gap-2">
                        {withLogos ? <Logo size={16} /> : <></>}
                        <div className="py-3 px-1">
                            {option}
                        </div>
                    </div>
                ))}
            </div>
        </div>
    )
}

export default SidebarListGroup