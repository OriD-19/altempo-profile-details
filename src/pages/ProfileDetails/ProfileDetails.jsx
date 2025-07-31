import React, { useState } from 'react'
import NotificationsToggle from '../../components/notificationsToggle/NotificationsToggle'
import ProfileCard from '../../components/profileCard/ProfileCard'
import TabNavigation from '../../components/tabNavigation/TabNavigation'
import AccountDetails from '../../components/accountDetails/AccountDetails'
import BandDetails from '../../components/accountDetails/BandDetails'

const ProfileDetails = () => {

  const [currTab, setCurrTab] = useState("cuenta")

  return (
    <div className="bg-white w-full rounded-xl p-10">
      {/* Header content... could separate into its own component */}
      <NotificationsToggle />

      <div className="mt-6">
        <h1 className="text-4xl font-bold mb-2 text-gray-800">Tu Perfil</h1>
        <p className="text-gray-700">Verifica y actualiza tu información para que puedan encontrarte y conocerte mejor.</p>
      </div>

      {/* Separator */}
      <div className="border-b-gray-200 border-b-1 my-6"></div>

      <div className="flex flex-row justify-evenly gap-4">

        <ProfileCard cardTitle="Servicios impartidos">
          <p className="text-2xl font-bold text-gray-700">8</p>
        </ProfileCard>

        <ProfileCard cardTitle="Ranking Global">
          <div className="flex flex-row gap-2">
            <p className="text-2xl font-bold text-gray-700">3.5</p>
          </div>
        </ProfileCard>

        <ProfileCard cardTitle="Tiempo en la plataforma">
          <div className="flex flex-row gap-2">
            <p className="text-2xl font-bold text-gray-700">1 mes</p>
          </div>
        </ProfileCard>


      </div>

      {/* Ugly prop drilling... */}
      <TabNavigation changeTab={setCurrTab} currTab={currTab}/>

      {/* In a real app, these two components should render conditionally based on the current "tab" */}
      {currTab === "cuenta" ? <AccountDetails /> : <BandDetails />}

    </div>
  )
}

export default ProfileDetails