import React from 'react'

const ProfileCard = ({ children, cardTitle }) => {
  return (
    <div className="border-1 border-gray-200 p-4 flex-1 flex-col rounded-xl">
      <h3 className="text-gray-500">{cardTitle}</h3>
      {children}
    </div>
  )
}

export default ProfileCard