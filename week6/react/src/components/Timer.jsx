import React, { useRef } from 'react'

export const Timer = () => {
    let timeRef = useRef(1)
    let timerId = ''

    const startHandler = () => {
        console.log(timeRef.current)
        timerId = setInterval(() => {
            timeRef.current.innerText = Number(timeRef.current.innerText) + 1
        }, 100)
    }

    const stopHandler = () => {
        clearInterval(timerId)
    }

    return (
        <div>
            <p ref={timeRef}>1</p>
            <button onClick={startHandler}>start</button>
            <button onClick={stopHandler}>stop</button>
        </div>
    )
}
