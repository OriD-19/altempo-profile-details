import React from 'react'
import Logo from '../logos/Logo'

const SidebarFooter = () => {
    return (
        <footer className="flex flex-col gap-4 text-gray-500">

            <div className="flex flex-col gap-5 p-6 ml-2">
                <div className="flex flex-row gap-4 items-center">
                    <Logo size={16} />
                    <h3>Cerrar Sesión</h3>
                </div>
                <div className="flex flex-row gap-4 items-center">
                    <Logo size={16} />
                    <h3>Soporte</h3>
                </div>
            </div>

            <div className="bg-white p-4 flex flex-row justify-between items-center rounded-xl">
                <div className="flex flex-row justify-between items-center gap-4">
                    <div className="h-full w-full aspect-square p-1 bg-violet-700 tracking-[0.15em] text-white rounded-lg flex justify-center items-center text-2xl">
                        JH
                    </div>
                    <div className="flex flex-col">
                        <h4 className="font-bold">Jim Harrison</h4>
                        <p className="text-gray-500">jim.h@gmail.com</p>
                    </div>

                </div>
                <Logo size={32} />
            </div>

        </footer>
    )
}

export default SidebarFooter