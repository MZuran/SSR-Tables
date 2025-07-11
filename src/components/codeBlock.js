import React from 'react'
import CopyToClipboardButton from './copyToClipboardButton'

function CodeBlock({ children, copyButton = true }) {
  return (
    <>
      <div className='scrollable-container'>
        <div className='code-block'>
          <pre>{children}</pre>
        </div>
      </div>
      {copyButton && <CopyToClipboardButton textToCopy={children} />}
    </>
  )
}

export default CodeBlock
