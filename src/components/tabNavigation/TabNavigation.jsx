import React from 'react'
import Tab from './Tab'

const TabNavigation = ({ currTab, changeTab }) => {

    return (
        <div className="flex flex-row bg-gray-100 p-1 w-100 rounded-full my-6">

            <Tab title="Cuenta" active={currTab === "cuenta"} changeTab={changeTab} />
            <Tab title="Perfil Banda" active={currTab === "perfil banda"} changeTab={changeTab} />

        </div>
    )
}

export default TabNavigation