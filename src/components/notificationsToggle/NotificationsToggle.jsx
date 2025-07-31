import React from 'react'
import ToggleButton from '../toggleButton/ToggleButton'

const NotificationsToggle = () => {
  return (
    <div className="bg-gray-200 flex flex-row justify-between px-4 py-2 items-center rounded-xl">
        <p>Activa o desactiva tu disponibilidad según te sientas cómodo</p>
        <ToggleButton />
    </div>
  )
}

export default NotificationsToggle