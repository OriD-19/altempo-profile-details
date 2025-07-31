import React from 'react'

const AccountDetailCard = ({ title, subtitle, isBottomCard, children }) => {
    return (
        <div className="px-4 py-6 border-gray-200 gap-3" style={{ borderBottom: isBottomCard ? "0px solid #e5e7eb " : "1px solid #e5e7eb "}}>
            <div className="flex flex-row gap-3">
                <div className="flex flex-col flex-1">
                    <h3 className="text-md mb-1">{title}</h3>
                    <p className="text-gray-500">{subtitle}</p>
                </div>

                <div className="flex flex-1 w-full">
                    {children}
                </div>

            </div>

        </div>
    )
}

export default AccountDetailCard