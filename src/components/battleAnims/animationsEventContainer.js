import React from 'react'
import WeaponForm from './weaponForm'

function AnimationsEventContainer({ filePath }) {
  return (
    <>
      <hr />
      <h5>Linking battle animation pointer with definitions</h5>
      <small className="text-muted wrap-container"><em>{filePath}</em></small>
      <div className='d-flex'>
        <WeaponForm/>
      </div>
    </>
  )
}

export default AnimationsEventContainer
