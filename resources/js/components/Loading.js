import React from 'react'

const Loading = ({ loading }) => {
    return (
        (loading) ? 
        <div class="la-line-spin-clockwise-fade la-dark la-sm">
            <div></div>
            <div></div>
            <div></div>
            <div></div>
            <div></div>
            <div></div>
            <div></div>
            <div></div>
        </div> : <div></div>
    )
}

export default Loading
