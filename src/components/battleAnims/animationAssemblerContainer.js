import React from 'react'

function AnimationAssemblerContainer({ filePath }) {
  return (
    <>
      <hr />
      <h5>Assembling the Animations</h5>
      <small className="text-muted wrap-container"><em>{filePath}</em></small>
      <p className='mt-4'>
        <code>_BatchAnimationAssembler.cmd</code> takes the <code>.bin</code> files in the png subfolders, turns them into <code>.event</code> files <br/>
        and creates <code>GeneratedInstaller.event</code> with the new animations configured in the file.
      </p>
    </>
  )
}

export default AnimationAssemblerContainer
