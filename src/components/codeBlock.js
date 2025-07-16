import React from 'react'
import CopyToClipboardButton from './copyToClipboardButton'

function CodeBlock({ children, copyButton = true, copyContent = children, className }) {
  return (
    <>
      <div className={`scrollable-container ${className}`}>
        <code className='code-block'>
          <pre>{children}</pre>
        </code>
      </div>
      {copyButton && <CopyToClipboardButton textToCopy={copyContent} />}
    </>
  )
}

export default CodeBlock
