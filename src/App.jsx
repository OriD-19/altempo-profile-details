import { useState } from 'react'
import Sidebar from './components/sidebar/Sidebar'
import ProfileDetails from './pages/ProfileDetails/ProfileDetails'

function App() {
  return (
    <div className="p-4 bg-gray-100 min-h-[100vh] flex flex-row gap-6">
      <Sidebar />
      <ProfileDetails />
    </div>
  )
}

export default App
