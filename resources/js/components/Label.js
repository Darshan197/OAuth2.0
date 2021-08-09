import React from 'react'

const Label = ({ children, ...rest }) => {
    return (
        <label {...rest} className="block font-medium text-sm text-gray-700">
            {children}
        </label>
    )
}

export default Label
