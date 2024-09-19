import React from 'react'

export const Todo = ({ title, description }) => {
    return (
        <div>
            <h1>{title}</h1>
            <h2>{description}</h2>
        </div>
    )
}
