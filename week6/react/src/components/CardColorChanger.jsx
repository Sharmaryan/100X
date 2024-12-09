import React, { useState } from 'react'
import { cardColorChanger } from '../mock/CardColorChanger.mock'

const randomColor = () => {
    let color = '#'
    for (let i = 0; i < 6; i++) {
        color = color + Math.floor(Math.random() * 10)
    }
    return color
}

export const CardColorChanger = () => {
    const [items, setItems] = useState(cardColorChanger)

    return (
        <div style={{ display: 'flex', justifyContent: 'center', height: '100vh', flexWrap: 'wrap', gap: '2rem' }}>{items.map((item, index) => {
            return <button key={item.id} style={{ border: '1px solid black', height: '15rem', width: '15rem', cursor: 'pointer', background: item.color, }} onClick={() => {
                setItems((prevItems) => {
                    const newList = [...prevItems]
                    newList[index] = { ...newList[index], color: randomColor() }
                    return newList
                }
                )
            }}>
                <p>{item.title}</p>
                <p>{item.description}</p>
            </button>
        })}</div>
    )
}
