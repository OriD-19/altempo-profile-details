import React from 'react'
import MainAccountBadge from './MainAccountBadge'

const PaymentAccount = ({ accountName, accountDetails, isBottom, isMainAccount }) => {
  return (
    <div className="py-2 px-4 flex flex-row justify-between" style={{ borderBottom: isBottom ? "0px solid #e5e7eb " : "1px solid #e5e7eb "}}>
        <div className="flex flex-row gap-3 items-center">
            <div>
                <h3>{accountName}</h3>
                <p className="text-sm text-gray-500">{accountDetails}</p>
            </div>
            {isMainAccount ? <MainAccountBadge /> : <></>}
        </div>

        <div className="flex flex-row gap-2">
            <button className="text-violet-500">Editar</button>
            <button className="text-red-500">Eliminar</button>
        </div>
    </div>
  )
}

export default PaymentAccount