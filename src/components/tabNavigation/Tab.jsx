import React from 'react'

const Tab = ({ active, title, changeTab }) => {
    return (
        <>
            {/* Duplicate code due to Tailwind pre-compliation step. You must specify the classes that you are going to use before the app gets compiled, for CSS optimization */}
            {/* Could use something like styled components for improving this 🤓 */}

            {active ? (
                <button className="flex justify-center items-center bg-violet-700 text-white rounded-full flex-1 px-4 py-2 cursor-pointer"
                onClick={() => changeTab(title.toLowerCase())}>
                    {title}
                </button>
            ) : (
                <button className="flex justify-center items-center bg-gray-100 text-gray-500 rounded-full flex-1 px-4 py-2 cursor-pointer"
                onClick={() => changeTab(title.toLowerCase())}>
                    {title}
                </button>
            )}
        </>
    )
}

export default Tab