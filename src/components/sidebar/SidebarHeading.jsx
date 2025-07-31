import React from 'react'
import SidebarNotifications from './SidebarNotifications'

const SidebarHeading = () => {
  return (
    <div className="px-6 py-4 flex flex-row justify-between border-b-1 border-gray-300">
        <div className="mx-2 flex justify-center items-center">
            <img src="./public/altempo_logo.svg" alt="Altempo" />
        </div>

        <SidebarNotifications />
    </div>
  )
}

export default SidebarHeading