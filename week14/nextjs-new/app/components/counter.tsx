"use client"
import React, { useState } from 'react'

export const Counter = () => {
    const [count, setCount] = useState(1)
  return (
    <div>
        {count}
        <button onClick={() => {
            return setCount(count => {
                return count + 1
            })
        }}>click</button>
    </div>
  )
}
