import React from 'react'

export const Header = React.memo(({ title }) => {
    return (
        <div>{title}</div>
    )
})
