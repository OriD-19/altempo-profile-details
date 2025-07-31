import React from 'react'
import SidebarHeading from './SidebarHeading'
import Logo from '../logos/Logo'
import SidebarListGroup from './SidebarListGroup'
import SidebarFooter from './SidebarFooter';

const shortcutsSubMenu = [
  "Calendario",
  "Disponibilidad",
  "Contratos",
];

const mainMenuSubMenu = [
  "Referidos",
  "Integrantes",
  "Instrumentos",
  "Calendario",
  "Servicios",
  "Disponibilidad",
  "Presupuestos",
  "Membresia",
  "Contratos",
];

const Sidebar = () => {
  return (
    <div className="py-4 min-h-[100vh] w-[25%] max-w-[300px] text-gray-700 font-[Inter] flex flex-col justify-between">
      <div>
        <SidebarHeading />
        {/* Options container */}
        <div className="flex flex-col gap-7 p-6">
          {/* Wrap in a link for navigation */}
          <div className="flex flex-row gap-6 items-center my-4">
            <Logo size={32} />
            <h2>Tu Organizador</h2>
          </div>
          <SidebarListGroup groupTitle="Atajos" optionsList={shortcutsSubMenu} />
          <SidebarListGroup groupTitle="Menu Principal" optionsList={mainMenuSubMenu} withLogos={true} />

        </div>
      </div>

      <SidebarFooter />

    </div>
  )
}

export default Sidebar