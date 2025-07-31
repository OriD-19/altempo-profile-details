import { PlusOutlined } from '@ant-design/icons'
import React from 'react'

const AddElementInput = ({ addItemText }) => {
    return (
        <div className="border-1 border-gray-200 rounded-full flex flex-row gap-4 text-violet-500 w-fit p-1 px-3">
            <PlusOutlined className="text-violet-500" />
            <p className="text-violet-500 font-medium">{addItemText}</p>
        </div>
    )
}

export default AddElementInput