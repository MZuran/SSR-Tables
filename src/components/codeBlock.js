import React from 'react'
import CopyToClipboardButton from './copyToClipboardButton'

function CodeBlock({children}) {
  return (
    <>
    <div className='code-block'>
      {children}
    </div>
    <CopyToClipboardButton textToCopy={children}/>
    </>
  )
}

export default CodeBlock
