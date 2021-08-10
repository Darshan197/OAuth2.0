import React from 'react'

const Input = (props) => {
    return (
        <input {...props} className={`border-gray-300 focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50 rounded-md shadow-sm disabled:bg-gray-100 disabled:cursor-pointer ${props.className}`} />
    )
}

export default Input
