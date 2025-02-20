import React, { useState } from 'react'

export const Toggle = ({render}) => {
    const [on, setOn] = useState(false)
    const handleToggle = () => {
        setOn((prev) => !prev)
    }
  return render(on, handleToggle)
}
