import React, { useState } from 'react'
import './ToggleSwitch.css'
function ToggleSwitch() {
    const [isOn , setIsOn] = useState(false)
    const toggleHandleClick = ()=>{
        setIsOn(!isOn)
    }
  return (
    <div className={`toggle-switch ${isOn ? '': 'off'}`} onClick={toggleHandleClick}>
        <div className={`switch ${isOn ? 'on': 'off'}`}>
            <span className='switch-state'>{isOn ? 'On': 'Of'}</span>
        </div>
    </div> 
  )
}

export default ToggleSwitch