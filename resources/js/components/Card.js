import React from 'react'

const Card = ({ header, children }) => {
    return (
        <div className="bg-white shadow sm:rounded overflow-hidden">
            <div className="bg-gray-50 py-2 px-4 border-b flex justify-between items-center">
                {header}
            </div>
            <div className="p-4">
                {children}
            </div>
        </div>
    )
}

export default Card
